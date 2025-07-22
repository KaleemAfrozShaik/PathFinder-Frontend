

const RoadmapCard = ({ title, desc, img }) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg w-60 shrink-0">
      <div
        className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-lg"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div>
        <p className="text-[#111418] text-base font-medium">{title}</p>
        <p className="text-[#60758a] text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default RoadmapCard;