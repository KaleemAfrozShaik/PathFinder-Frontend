// ChatPlaceholder.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ChatPlaceholder = () => {
  const { mentorId } = useParams();
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/users/mentor/${mentorId}`);
        setMentor(res.data.data);
      } catch (err) {
        console.error("Failed to fetch mentor", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [mentorId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading mentor info...</p>
      </div>
    );
  }

  if (!mentor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Mentor not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-[#111418] mb-4">
          Chat with {mentor.name}
        </h1>

        <div className="border border-dashed border-gray-300 rounded-xl p-8 text-center bg-[#f9fafb]">
          <p className="text-gray-500 text-lg">💬 Chat feature is coming soon!</p>
          <p className="mt-2 text-gray-600">
            Until then, you can reach out to {mentor.name} via email:
          </p>
          <a
            href={`mailto:${mentor.email}`}
            className="mt-3 inline-block text-blue-600 font-semibold underline break-all"
          >
            {mentor.email}
          </a>
        </div>

        <div className="mt-6">
          <label className="block text-sm text-gray-500 mb-1">Chat Input</label>
          <input
            type="text"
            disabled
            placeholder="Chat box will be enabled soon..."
            className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-400 cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPlaceholder;