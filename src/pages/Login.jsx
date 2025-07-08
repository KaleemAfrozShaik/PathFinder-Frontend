import React from "react";
import { Link } from "react-router-dom";

// Google Sign-In Button subcomponent
const GoogleButton = () => (
  <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z" />
    </svg>
    <span>Continue with Google</span>
  </button>
);

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[512px] flex flex-col py-5">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight text-center pb-3 pt-5">
          Welcome back
        </h2>
        <p className="text-[#111418] text-base font-normal text-center pb-3">
          Sign in to continue your career journey
        </p>
        <div className="flex px-4 py-3">
          <GoogleButton />
        </div>
        <p className="text-[#60758a] text-sm text-center pb-3">or</p>
        <div className="flex flex-col gap-4 px-4">
          <label className="flex flex-col w-full">
            <p className="text-[#111418] text-base font-medium pb-2">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg border border-[#dbe0e6] bg-white h-14 px-4 text-base placeholder:text-[#60758a] focus:outline-none"
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-[#111418] text-base font-medium pb-2">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="rounded-lg border border-[#dbe0e6] bg-white h-14 px-4 text-base placeholder:text-[#60758a] focus:outline-none"
            />
          </label>
        </div>
        <div className="flex px-4 py-3">
          <button className="w-full h-10 rounded-lg bg-[#0c7ff2] text-white font-bold text-sm">
            Sign in
          </button>
        </div>
        <Link to="/signup" className="text-[#60758a] text-sm text-center underline px-4 pt-2 cursor-pointer">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;