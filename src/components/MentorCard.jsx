import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MentorCard = ({ mentor }) => {
  const navigate = useNavigate();
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
            onClick={() => navigate(`/mentorship/request/${mentor.id}`)}
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
      <div className="flex-1">
        <img
          src={mentor.image}
          alt={mentor.name}
          className=" max-h-50  rounded-lg"
        />
      </div>
    </div>
  );
};

export default MentorCard;
