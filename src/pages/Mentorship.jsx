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
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/mentors`,
          { withCredentials: true }
        );
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
    <main className="container mx-auto px-4 sm:px-6 lg:px-40 py-8 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-[960px] mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Find a Mentor
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto sm:mx-0">
          Connect with experienced professionals who can guide you on your career journey.
        </p>
      </header>

      {/* Register as Mentor Promo */}
      {user && user.role !== "mentor" && (
        <section
          role="region"
          aria-label="Register as Mentor Call to Action"
          className="w-full max-w-[960px] bg-blue-50 border border-blue-300 rounded-lg p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3 text-blue-800 font-medium text-lg">
            <svg
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>Want to become a mentor?</span>
          </div>
          <Link
            to="/register-mentor"
            className="inline-block bg-blue-600 hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-400 text-white font-semibold rounded-md px-6 py-2 transition"
            aria-label="Register as a mentor"
          >
            Register as Mentor
          </Link>
        </section>
      )}

      {/* Mentors Section */}
      <section className="w-full max-w-[960px]">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          Available Mentors
        </h2>

        {loading ? (
          <div className="flex justify-center py-20" aria-live="polite" aria-busy="true">
            <svg
              className="animate-spin h-10 w-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <span className="sr-only">Loading mentors...</span>
          </div>
        ) : mentors.length === 0 ? (
          <p className="text-center text-gray-500 py-10 text-lg">
            No mentors available yet. Be the first to{" "}
            <Link
              to="/register-mentor"
              className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              become a mentor
            </Link>
            !
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
              <MentorCard
                key={mentor._id}
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
      </section>
    </main>
  );
};

export default Mentorship;
