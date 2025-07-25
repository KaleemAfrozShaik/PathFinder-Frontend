import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Logo component
const Logo = () => (
  <div className="flex items-center gap-3 text-[#111418]">
    <div className="size-5 text-blue-600">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <h2 className="text-lg font-bold tracking-tight">
      <Link to="/">PathFinder</Link>
    </h2>
  </div>
);

const navLinkClass = "text-sm font-medium text-[#111418]";
const placeholderAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const isLoggedIn = !!user;
  const profileImg = user?.profilePicture || placeholderAvatar;

  return (
    <header className="bg-white border-b border-[#f0f2f5] px-4 py-3 md:px-10">
      <div className="flex items-center justify-between">
        <Logo />

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            <Link className={navLinkClass} to="/">Home</Link>
            <Link className={navLinkClass} to="/career-paths">Career Paths</Link>
            <Link className={navLinkClass} to="/mentorship">Mentorship</Link>
          </div>

          {user ? (
            <Link to="/profile" className="flex items-center gap-2">
              <img
                src={profileImg}
                alt="Profile"
                className="w-9 h-9 rounded-full border border-gray-300 object-cover"
              />
            </Link>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/register"
                className="h-10 px-4 rounded-lg bg-[#0c7ff2] text-white text-sm font-bold flex items-center justify-center"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="h-10 px-4 rounded-lg bg-[#f0f2f5] text-[#111418] text-sm font-bold flex items-center justify-center"
              >
                Log In
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-start gap-4 mt-4 px-2">
          <Link className={navLinkClass} to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className={navLinkClass} to="/career-paths" onClick={() => setIsOpen(false)}>Roadmaps</Link>
          <Link className={navLinkClass} to="/mentorship" onClick={() => setIsOpen(false)}>Mentorship</Link>

          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/profile">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-9 h-9 rounded-full border border-gray-300 object-cover"
                />
              </Link>
            </div>
          ) : (
            <>
              <Link
                to="/signup"
                className="w-full text-center py-2 rounded-lg bg-[#0c7ff2] text-white text-sm font-bold"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="w-full text-center py-2 rounded-lg bg-[#f0f2f5] text-[#111418] text-sm font-bold"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;