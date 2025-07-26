import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RegisterMentor = () => {
  const { user, setUser } = useContext(AuthContext);
  const [bio, setBio] = useState(user?.bio || "");
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${BACKEND_URL}/api/v1/users/update-role`,
        { role: "mentor", bio },
        { withCredentials: true }
      );
      setUser(res.data.data); // 🔁 update global user
      alert("Registered as mentor successfully!");
      navigate("/profile");
    } catch (err) {
      console.error("Mentor registration failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Register as Mentor</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <textarea
          className="border rounded p-2"
          placeholder="Write a short mentor bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={5}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
          type="submit"
        >
          Submit & Become Mentor
        </button>
      </form>
    </div>
  );
};

export default RegisterMentor;