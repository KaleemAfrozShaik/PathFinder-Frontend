import React from "react";

const AboutUs = () => (
  <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
    <div className="flex flex-col w-full max-w-[720px] gap-6 bg-white rounded-lg shadow p-8">
      <h1 className="text-[#111418] text-3xl font-bold mb-2">About PathFinder</h1>
      <p className="text-[#60758a] text-base">
        PathFinder is dedicated to empowering students and professionals to discover, plan, and achieve their ideal career paths. Our platform provides personalized roadmaps, curated resources, and access to experienced mentors, making career growth accessible to everyone.
      </p>
      <h2 className="text-[#111418] text-xl font-bold mt-4 mb-1">Our Mission</h2>
      <p className="text-[#60758a] text-base">
        To guide and inspire individuals on their journey to professional success by providing clear, actionable steps and a supportive community.
      </p>
      <h2 className="text-[#111418] text-xl font-bold mt-4 mb-1">Our Values</h2>
      <ul className="list-disc pl-6 text-[#60758a] text-base space-y-1">
        <li>Empowerment through knowledge</li>
        <li>Inclusivity and accessibility</li>
        <li>Continuous learning and growth</li>
        <li>Community and mentorship</li>
      </ul>
    </div>
  </div>
);

export default AboutUs;
