import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePicture: "",
  });
  const [preview, setPreview] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/users/me", {
          withCredentials: true,
        });
        const { name, bio, profilePicture } = res.data.data;
        setFormData({ name, bio, profilePicture });
        setPreview(profilePicture);
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };
    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: file });
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("bio", formData.bio);
      if (formData.profilePicture instanceof File) {
        data.append("profilePicture", formData.profilePicture);
      }

      await axios.put(
        "http://localhost:8000/api/v1/users/update-profile",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/profile");
    } catch (err) {
      console.error("Update failed", err);
      alert("Update failed");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mb-4">
          <label htmlFor="profilePicture">
            <img
              src={
                preview ||
                "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              }
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover cursor-pointer border"
            />
          </label>
          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition ${isSaving ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;