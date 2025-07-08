import React from "react";

const PrivacyPolicy = () => (
  <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
    <div className="flex flex-col w-full max-w-[720px] gap-6 bg-white rounded-lg shadow p-8">
      <h1 className="text-[#111418] text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-[#60758a] text-base mb-2">
        Your privacy is important to us. PathFinder is committed to protecting your personal information and being transparent about how we use it.
      </p>
      <h2 className="text-[#111418] text-xl font-bold mt-4 mb-1">Information We Collect</h2>
      <ul className="list-disc pl-6 text-[#60758a] text-base space-y-1">
        <li>Personal information you provide (name, email, etc.)</li>
        <li>Usage data (pages visited, features used)</li>
      </ul>
      <h2 className="text-[#111418] text-xl font-bold mt-4 mb-1">How We Use Your Information</h2>
      <ul className="list-disc pl-6 text-[#60758a] text-base space-y-1">
        <li>To provide and improve our services</li>
        <li>To communicate updates and support</li>
        <li>To personalize your experience</li>
      </ul>
      <p className="text-[#60758a] text-base mt-4">
        We do not sell your data. For questions, contact us at <a href="mailto:support@pathfinder.com" className="text-blue-600 underline">support@pathfinder.com</a>.
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;
