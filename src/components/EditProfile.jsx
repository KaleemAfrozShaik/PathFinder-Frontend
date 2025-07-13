import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [name, setName] = useState("Sophia Clark");
  const [bio, setBio] = useState("Aspiring software engineer passionate about learning and building impactful projects.");
  const [profileImage, setProfileImage] = useState(null); // File object
  const [previewImage, setPreviewImage] = useState(null); // Data URL for preview

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // You can use FormData to send this to the backend
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    if (profileImage) formData.append("profileImage", profileImage);

    // Replace with actual backend logic (e.g., axios.post("/api/profile", formData))
    navigate("/profile"); // Redirect to profile page after saving
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-[#111418] mb-6">Edit Profile</h2>

        <div className="flex flex-col gap-4">
          {/* Image Preview */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: previewImage
                  ? `url(${previewImage})`
                  : `url("https://via.placeholder.com/150")`,
              }}
            ></div>
          </div>

          <div>
            <label className="text-sm text-[#60758a] mb-1 block">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm text-[#60758a] mb-1 block">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-[#60758a] mb-1 block">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleSave}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;