// ChatPlaceholder.jsx

import { useParams } from "react-router-dom";

const ChatPlaceholder = ({ recipientEmail, recipientName }) => {
  const { mentorId, studentId } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Chat with {recipientName}
        </h1>

        <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-lg">
            💬 Chat feature is coming soon!
          </p>
          <p className="mt-2 text-gray-600">
            Until then, you can contact {recipientName} via email:
          </p>
          <a
            href={`mailto:${recipientEmail}`}
            className="mt-3 inline-block text-blue-600 font-medium underline"
          >
            {recipientEmail}
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