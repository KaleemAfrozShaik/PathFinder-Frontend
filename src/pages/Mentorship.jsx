import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import MentorCard from "../components/MentorCard";
import axios from "axios"; 

const Mentorship = () => {
  const { user } = useContext(AuthContext);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/users/mentors", { withCredentials: true });
        setMentors(res.data.data);
      } catch (error) {
        console.error("Failed to fetch mentors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] text-[32px] font-bold leading-tight">Find a Mentor</p>
            <p className="text-[#60758a] text-sm font-normal">
              Connect with experienced professionals who can guide you on your career journey.
            </p>
          </div>
        </div>

        {user && user.role !== "mentor" && (
          <div className="bg-[#f0f2f5] border rounded px-4 py-3 mx-4 my-2 text-center">
            <p className="text-md font-medium mb-2">Want to become a mentor?</p>
            <Link
              to="/register-mentor"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Register as Mentor
            </Link>
          </div>
        )}

        <h2 className="text-[#111418] text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">
          Available Mentors
        </h2>

        {loading ? (
          <p className="px-4 text-gray-500">Loading mentors...</p>
        ) : mentors.length === 0 ? (
          <p className="px-4 text-gray-500">No mentors available yet.</p>
        ) : (
          <div className="p-4 space-y-4">
            {mentors.map((mentor, index) => (
              <MentorCard
                key={index}
                mentor={{
                  name: mentor.name,
                  description: mentor.bio,
                  image: mentor.profilePicture,
                  id: mentor._id,
                  sessionStatus: "None", 
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentorship;