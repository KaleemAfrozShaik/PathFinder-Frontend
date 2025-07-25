import React from "react";

const CareerCard = ({ career, onClick }) => (
  <div className="flex flex-col gap-3 pb-3 cursor-pointer" onClick={onClick}>
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
      style={{ backgroundImage: `url(${career.img})` }}
    ></div>
    <div>
      <p className="text-[#111418] text-base font-medium leading-normal">{career.title}</p>
      <p className="text-[#60758a] text-sm font-normal leading-normal">{career.desc}</p>
    </div>
  </div>
);

export default CareerCard;
