import React from "react";

// SuccessCard accepts props for future extensibility
const SuccessCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg min-w-60 bg-white border border-[#dbe0e6] p-4">
      {image && (
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}
      <div>
        <p className="text-[#111418] text-base font-medium leading-normal">{title || "Success Title"}</p>
        <p className="text-[#60758a] text-sm font-normal leading-normal">{description || "Success description goes here."}</p>
      </div>
    </div>
  );
};

export default SuccessCard;
