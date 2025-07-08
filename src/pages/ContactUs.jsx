import React from "react";

const ContactUs = () => (
  <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
    <div className="flex flex-col w-full max-w-[480px] gap-6 bg-white rounded-lg shadow p-8">
      <h1 className="text-[#111418] text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-[#60758a] text-base mb-4">
        Have a question, suggestion, or need support? Fill out the form below and our team will get back to you soon.
      </p>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-[#111418] font-medium">Name</span>
          <input type="text" className="rounded-lg border border-[#dbe0e6] bg-white h-12 px-4 text-base placeholder:text-[#60758a] focus:outline-none" placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[#111418] font-medium">Email</span>
          <input type="email" className="rounded-lg border border-[#dbe0e6] bg-white h-12 px-4 text-base placeholder:text-[#60758a] focus:outline-none" placeholder="you@email.com" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[#111418] font-medium">Message</span>
          <textarea className="rounded-lg border border-[#dbe0e6] bg-white h-24 px-4 py-2 text-base placeholder:text-[#60758a] focus:outline-none resize-none" placeholder="How can we help?" />
        </label>
        <button type="button" className="h-10 rounded-lg bg-[#0c7ff2] text-white font-bold text-sm mt-2">Send Message</button>
      </form>
    </div>
  </div>
);

export default ContactUs;
