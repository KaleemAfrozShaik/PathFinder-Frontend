import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import RoadmapCard from '../components/RoadmapCard';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [savedRoadmaps, setSavedRoadmaps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/users/me", {
          withCredentials: true,
        });
        setUser(res.data.data);
      } catch (err) {
        console.error("Error fetching user", err);
        navigate("/login");
      }
    };

    const fetchSavedPaths = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/users/saved-paths", {
          withCredentials: true,
        });
        setSavedRoadmaps(res.data.data || []);
      } catch (err) {
        console.error("Error fetching saved roadmaps", err);
      }
    };

    fetchUser();
    fetchSavedPaths();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/users/logout", {}, {
        withCredentials: true,
      });
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
      console.error(err);
    }
  };

  if (!user) return <div className="p-10 text-center text-gray-600">Loading...</div>;

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex p-4">
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex gap-4">
              <img
                src={user.profilePicture || "https://profilePictures.githubusercontent.com/u/17099752?v=4"}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2"
              />
              <div>
                <h2 className="text-2xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-500 text-sm">{user.bio || "No bio added"}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link to="/edit-profile" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Edit Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="text-xl font-semibold mb-4">Saved Roadmaps</h3>
        <div className="flex flex-wrap gap-4">
          {savedRoadmaps.length > 0 ? (
            savedRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap._id} roadmap={roadmap} />
            ))
          ) : (
            <p className="text-gray-500">No saved roadmaps yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;