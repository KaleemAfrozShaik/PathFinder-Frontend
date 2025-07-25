import React from "react";

const RoadmapStep = ({ idx, step, checked, onToggle }) => (
  <React.Fragment>
    <div className="flex flex-col items-center gap-1 pt-3">
      {/* <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(idx)}
        className="w-5 h-5 accent-green-600 cursor-pointer"
      /> */}
      <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
    </div>
    <div className="flex flex-col py-3">
      <p className="text-[#111418] text-base font-medium">{step.title}</p>
      <p className="text-[#60758a] text-sm">{step.desc}</p>
    </div>
  </React.Fragment>
);
export default RoadmapStep;
