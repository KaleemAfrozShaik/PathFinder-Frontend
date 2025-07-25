import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import RoadmapCard from '../components/RoadmapCard';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const [savedRoadmaps, setSavedRoadmaps] = useState([]);
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

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
  }, [navigate, setUser]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/users/logout", {}, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
      console.error(err);
    }
  };

  if (!user)
    return (
      <div className="p-10 text-center text-gray-600">
        Loading profile...
      </div>
    );

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-40 py-8 flex justify-center">
      <div className="w-full max-w-[960px] flex flex-col gap-8">
        {/* Profile Header */}
        <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center gap-6 flex-wrap">
            <img
              src={user.profilePicture || "https://avatars.dicebear.com/api/initials/" + encodeURIComponent(user.name) + ".svg"}
              alt={`${user.name} profile`}
              className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://avatars.dicebear.com/api/initials/default.svg";
              }}
            />
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold text-gray-900 truncate">{user.name}</h2>
              <p className="text-gray-600 truncate">{user.email}</p>
              <p className="text-gray-500 text-sm mt-1">{user.bio || "No bio added"}</p>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/edit-profile"
              className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white px-5 py-2 rounded-md transition text-center"
            >
              Edit Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 text-white px-5 py-2 rounded-md transition"
            >
              Logout
            </button>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* Saved Roadmaps */}
        <section>
          <h3 className="text-xl font-semibold mb-6 text-gray-900">Saved Roadmaps</h3>
          {savedRoadmaps.length > 0 ? (
            <div className="flex flex-wrap gap-6">
              {savedRoadmaps.map((roadmap) => (
                <RoadmapCard key={roadmap._id} roadmap={roadmap} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No saved roadmaps yet.</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Profile;
