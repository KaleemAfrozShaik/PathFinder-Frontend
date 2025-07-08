import React from "react";

const TermsConditions = () => (
  <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
    <div className="flex flex-col w-full max-w-[720px] gap-6 bg-white rounded-lg shadow p-8">
      <h1 className="text-[#111418] text-3xl font-bold mb-2">Terms &amp; Conditions</h1>
      <p className="text-[#60758a] text-base mb-2">
        By using PathFinder, you agree to our terms and conditions. Please read them carefully.
      </p>
      <ul className="list-disc pl-6 text-[#60758a] text-base space-y-1">
        <li>Use PathFinder for lawful purposes only.</li>
        <li>Do not misuse or attempt to disrupt our services.</li>
        <li>Respect the privacy and rights of other users.</li>
        <li>Content and resources are for personal, non-commercial use.</li>
      </ul>
      <p className="text-[#60758a] text-base mt-4">
        For questions about these terms, contact us at <a href="mailto:support@pathfinder.com" className="text-blue-600 underline">support@pathfinder.com</a>.
      </p>
    </div>
  </div>
);

export default TermsConditions;
