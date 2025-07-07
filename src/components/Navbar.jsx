import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mock user login status (Replace with real auth logic later)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // set to false to simulate logged out

  return (
    <header className="bg-white border-b border-[#f0f2f5] px-4 py-3 md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 text-[#111418]">
          <div className="size-5 text-blue-600">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">
            <Link to="/">PathFinder</Link>
          </h2>
        </div>

        {/* Hamburger icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            <Link className="text-sm font-medium text-[#111418]" to="/">Home</Link>
            <Link className="text-sm font-medium text-[#111418]" to="/career-paths">Career Paths</Link>
            {/* <Link className="text-sm font-medium text-[#111418]" to="/roadmaps">Roadmaps</Link> */}
            <Link className="text-sm font-medium text-[#111418]" to="/mentorship">Mentorship</Link>
          </div>

          {/* Auth Buttons or Profile */}
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link to="/profile">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="Profile"
                  className="w-9 h-9 rounded-full border border-gray-300"
                />
              </Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/signup"
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
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 mt-4 px-2">
          <Link className="text-sm font-medium text-[#111418]" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          {/* <Link className="text-sm font-medium text-[#111418]" to="/career-paths" onClick={() => setIsOpen(false)}>Career Paths</Link> */}
          <Link className="text-sm font-medium text-[#111418]" to="/roadmaps" onClick={() => setIsOpen(false)}>Roadmaps</Link>
          <Link className="text-sm font-medium text-[#111418]" to="/mentorship" onClick={() => setIsOpen(false)}>Mentorship</Link>

          {/* Mobile Auth/Profile */}
          {isLoggedIn ? (
            <Link
              to="/profile"
              className="flex items-center gap-2 mt-2"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <span className="text-sm font-medium text-[#111418]">My Profile</span>
            </Link>
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
        </div>
      )}
    </header>
  );
};

export default Navbar;