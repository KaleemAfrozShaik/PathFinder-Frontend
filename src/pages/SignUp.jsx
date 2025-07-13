import React, { useState } from "react";
import { Link } from "react-router-dom";

const GoogleButton = () => (
  <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z" />
    </svg>
    <span>Continue with Google</span>
  </button>
);

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default role
    bio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send `formData` to your backend via axios/fetch
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[512px] flex flex-col py-5">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight text-center pb-3 pt-5">
          Create your account
        </h2>
        <p className="text-[#111418] text-base font-normal text-center pb-3">
          Join us to start your career journey
        </p>

        <div className="flex px-4 py-3">
          <GoogleButton />
        </div>

        <p className="text-[#60758a] text-sm text-center pb-3">or</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4">
          <label className="flex flex-col w-full">
            <p className="text-[#111418] text-base font-medium pb-2">Name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="rounded-lg border border-[#dbe0e6] bg-white h-14 px-4 text-base placeholder:text-[#60758a] focus:outline-none"
            />
          </label>

          <label className="flex flex-col w-full">
            <p className="text-[#111418] text-base font-medium pb-2">Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="rounded-lg border border-[#dbe0e6] bg-white h-14 px-4 text-base placeholder:text-[#60758a] focus:outline-none"
            />
          </label>

          <label className="flex flex-col w-full">
            <p className="text-[#111418] text-base font-medium pb-2">Password</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="rounded-lg border border-[#dbe0e6] bg-white h-14 px-4 text-base placeholder:text-[#60758a] focus:outline-none"
            />
          </label>

          <label className="flex flex-col w-full">
            <p className="text-[#111418] text-base font-medium pb-2">User Type</p>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="rounded-lg border border-[#dbe0e6] bg-white h-14 px-4 text-base text-[#111418] focus:outline-none"
            >
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </select>
          </label>

          <label className="flex flex-col w-full">
            <p className="text-[#111418] text-base font-medium pb-2">Short Bio</p>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              maxLength={500}
              placeholder="Tell us something about yourself"
              className="rounded-lg border border-[#dbe0e6] bg-white px-4 py-2 text-base placeholder:text-[#60758a] focus:outline-none resize-none"
            />
          </label>

          <button
            type="submit"
            className="w-full h-10 rounded-lg bg-[#0c7ff2] text-white font-bold text-sm"
          >
            Sign up
          </button>
        </form>

        <Link to="/login" className="text-[#60758a] text-sm text-center underline px-4 pt-2 cursor-pointer">
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
};

export default Signup;