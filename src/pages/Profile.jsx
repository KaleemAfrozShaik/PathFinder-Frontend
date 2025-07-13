import React from 'react';
import { Link } from 'react-router-dom';

// Dummy Data
const savedRoadmaps = [
  {
    title: "Product Management Roadmap",
    desc: "Learn the skills to become a Product Manager",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDtpg0FCI7...",
  },
  {
    title: "Data Science Roadmap",
    desc: "Learn the skills to become a Data Scientist",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDKsOoQVK...",
  },
];

// Roadmap Card subcomponent
const RoadmapCard = ({ title, desc, img }) => (
  <div className="flex flex-col gap-2 rounded-lg w-60 shrink-0">
    <div
      className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-lg"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
    <div>
      <p className="text-[#111418] text-base font-medium">{title}</p>
      <p className="text-[#60758a] text-sm">{desc}</p>
    </div>
  </div>
);

const Profile = () => {
  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  const handleLogout = () => {
    // Add your logout logic here (clear auth tokens, redirect, etc.)
    alert("Logged out");
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Profile Header */}
        <div className="flex p-4">
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAJ69HnChmZWmKmzKjngC-tCWyiwY2Sob2wZ_5jvXZ32KdJPBVU7CzkkSnJ-GaRjzNi_FvZcFfhlwk75AkQnzX09CQDtYu_CqE5SRCIN-4jIpilSLCHlD1MLFkzW2Y4le2PxnyzX3nZnev25T9Uidm4awGjf7VgWToZhokbSULriVO7IdEuUHilqkBk05w1B-VfQblnCSPZSWXr2WL1cScAGp4B8rqfQbsbrIM8PKdY2S4k3lQMNR6BjHICSPv58vB2N-yQO7th-c")',
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Sophia Clark</p>
                <p className="text-[#60758a] text-base font-normal leading-normal">sophia.clark@email.com</p>
                <p className="text-[#60758a] text-base font-normal leading-normal">Progress: 75%</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <Link to="/edit-profile"
                onClick={handleEditProfile}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
              >
                Edit Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        {/* Saved Roadmaps */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Saved Roadmaps</h2>
        <div className="flex overflow-x-auto gap-3 px-4 pb-4">
          {savedRoadmaps.map((roadmap, index) => (
            <RoadmapCard key={index} {...roadmap} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;