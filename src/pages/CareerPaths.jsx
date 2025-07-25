import { useNavigate } from "react-router-dom";
import React from "react";
import CareerCard from "../components/CareerCard";

const careerPaths = [
  {
    id: "web-developer",
    title: "Web Developer",
    desc: "Build and maintain websites and web applications.",
    img: "https://essencesoftwares.com/wp-content/uploads/2020/10/Web-Development.jpeg",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    desc: "Analyze complex data to inform business decisions.",
    img: "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    desc: "Develop intelligent systems and algorithms.",
    img: "https://aidegreeguide.com/wp-content/uploads/2023/11/ai-engineer.jpg",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    desc: "Lead the development and launch of new products.",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*TbyyZnfBkKB5lIxwftfOTA.png",
  },
  {
    id: "ux-ui-designer",
    title: "UX/UI Designer",
    desc: "Design user-friendly and engaging digital experiences.",
    img: "https://cdn.prod.website-files.com/678a08d17a6b88bae4e2d8ee/67931a04e2fa4a685fe08679_66b0929089fba41bd4d2481d_What-is-a-UI-UX-Designer.jpeg",
  },
  {
    id: "digital-marketer",
    title: "Digital Marketer",
    desc: "Promote products and services through online channels.",
    img: "https://www.michaelpage.ae/sites/michaelpage.ae/files/legacy/7_digital_skills600x387.png",
  },
];

const CareerPaths = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 flex justify-center py-5">
      <div className="flex flex-col max-w-[960px] w-full">
        <div className="flex flex-col gap-3 p-4">
          <p className="text-[#111418] text-2xl sm:text-3xl font-bold leading-tight tracking-wide">
            Explore Career Paths
          </p>
          <p className="text-[#60758a] text-sm sm:text-base font-normal leading-relaxed max-w-[600px]">
            Discover your ideal career path with our curated roadmaps. Each roadmap provides a step-by-step guide to acquiring the necessary skills and knowledge to succeed in your chosen field.
          </p>
        </div>
        {/* Career cards grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 sm:gap-10 p-4">
          {careerPaths.map((career) => (
            <CareerCard
              key={career.id}
              career={career}
              onClick={() => navigate(`/career-paths/${career.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPaths;
