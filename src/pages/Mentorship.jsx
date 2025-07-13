import React from "react";
import { Link } from "react-router-dom";

// Mentors data (now with sessionStatus)
const mentors = [
  {
    name: "Sarah Chen",
    description: "Software Engineer at TechCorp. Specializes in web development and career coaching for junior developers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzIIm6bBWseG5mmajTUeF77ce4Pp5CnyW4fHXaPym1fdIyLuBiGik7x411owsKZAP31hMUPwJYF4JW6vWghuCSMqe9tu641PcpJX24-G39_fIZLZmchodRXSW3sw2ColaqG-IcpjmkZfEi0gAkUlFzdYpXj8NiL18MVMowYNJS93dkxuHuY0EwLoj1W8IlDncQXjccO8dmje75youN1kIw776ah0f8r8fkf7f7_ANhAM9j38LMfi0D6dlac-Brbiyp8UXiySE3qWw",
    id: "mentor1",
    sessionStatus: "Accepted", // "Pending", "None", "Accepted"
  },
  {
    name: "David Lee",
    description: "Product Manager at Innovate Solutions. Expertise in product strategy, user research, and agile methodologies.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfaG7xzcbL7GiUIaG54vNH2UOnJvdnglJPGvzoPIl3ng8x2iQ0MCI2PJEl4jJHpE5_-zSffPtNt94pp9GGxib0R0tEc9Iz61Bd0yeCrQAHTOEQA_gwDM3MVqWcIs2Jq3qtftv1yzeacIks8cME0aEbAbRDTuTWdbduo_rYAAICG-oGGn6XVkgmMIkxiqaJp3tX19TUiy1HxPdPU24OlzqPP1aJXohNl0v0xsarzpKtHC-uhyxPDN3Opis7G1x3P_ySnuF5DsEyo8c",
    id: "mentor2",
    sessionStatus: "Pending",
  },
];

// Mentor Card subcomponent
const MentorCard = ({ mentor }) => {
  const renderButton = () => {
    switch (mentor.sessionStatus) {
      case "Accepted":
        return (
          <Link
            to={`/chat/${mentor.id}`}
            className="flex w-fit items-center justify-center rounded-lg h-8 px-4 bg-blue-600 text-white text-sm font-medium"
          >
            Talk to Mentor
          </Link>
        );
      case "Pending":
        return (
          <button
            disabled
            className="flex w-fit items-center justify-center rounded-lg h-8 px-4 bg-gray-300 text-gray-700 text-sm font-medium cursor-not-allowed"
          >
            Requested
          </button>
        );
      default:
        return (
          <button
            className="flex w-fit items-center justify-center rounded-lg h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium"
            onClick={() => alert("Session requested")} // Replace with actual request logic
          >
            Request Session
          </button>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
      <div className="flex-[2_2_0px] flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[#111418] text-base font-bold">{mentor.name}</p>
          <p className="text-[#60758a] text-sm">{mentor.description}</p>
        </div>
        {renderButton()}
      </div>
      <div
        className="aspect-video bg-cover bg-center rounded-lg flex-1"
        style={{ backgroundImage: `url(${mentor.image})` }}
      />
    </div>
  );
};

const Mentorship = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col w-full max-w-[960px]">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111418] text-[32px] font-bold leading-tight">
              Find a Mentor
            </p>
            <p className="text-[#60758a] text-sm font-normal">
              Connect with experienced professionals who can guide you on your career journey.
            </p>
          </div>
        </div>
        {/* Available Mentors Title */}
        <h2 className="text-[#111418] text-[22px] font-bold tracking-[-0.015em] px-4 pt-5 pb-3">
          Available Mentors
        </h2>
        {/* Mentor Cards */}
        <div className="p-4 space-y-4">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentorship;