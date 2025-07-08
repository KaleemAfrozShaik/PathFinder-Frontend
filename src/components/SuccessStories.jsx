import React from "react";
import SuccessCard from "./SuccessCard";

// Stories data
const stories = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0TBGxRb-oZPD-urJGYRXQGcc7OlKwYHjxwxWOhdW2aABlwh7o3R8wQ4ZS5mfeHF7cOblqKu5-s6vESQG0hz-he4xpDy7gh5k7a3uU1WHFo3THho-ANFtPdy_Yz7n27YZBGAs0wEAmj1x0WHbe8n9rVd4tbmxRYgMX4xdlaUnJrG-e9FNqdkadgTJJCv-PQ5VTr3F6CErTr7YCqvopxNl2Jqsv_pTkvHy2CWSfdBdNESR6Cx_rsGCX3WZcKYUsmwaZOYF_2e5OVsM",
    title: "From Aspiring Designer to Leading UX/UI Expert",
    description:
      "Sarah, a recent graduate, used PathFinder to discover her passion for UX/UI design and landed a role at a top tech company.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZX0sSx8jJ-PxS7mx8nqCaNvilP_Pcx7NILT6v8RICJtNlu07xxXdzmr0DbdB3PR2UNomXxihy31NMvrNR6SX8iZLWgQU3jDsFXPFuwMC-JB9QL1kdO2l1cub0uPChKufD9Wqbj0ONV19kcEKJIKIFCwuDlyKUlEa2K6ZO4xvHgEzHgjEmfSonrjhLPN9XyIHyKFkRRNgxdRowNoB21uIhgyDq8AWunN3W_j00KfAumeGbAWURZ83s8O48Nw9yPhylRemiNoO_m7w",
    title: "Navigating the Tech Industry with Confidence",
    description:
      "Mark, a career changer, utilized PathFinder's roadmaps to gain the necessary skills and successfully transition into a software engineering role.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwUkwI6dI9K0dea7486becsZ47V0GFftTzMfs10scSiwSR7NOhQ7mt8eJX_oCTzxUIQlNryUq9RbuLGpwPM0g_aHhnJZNUDysUVLvPerB5tO75HlVxD4q28bj0bBY6itUfodTvYzt-KxwsenmQvxMLcwSOr0HrIdYhbs2B--IfdZtJN9kO4y2vkQOmNZ7tBczVpAK4-eRaFRxTphG_D-RNSrem7SuxqduI7ARf35G2EFe7_WgCPGRgqjtAt_rFSP39lB7QY1yVSS0",
    title: "Achieving Career Goals with PathFinder's Support",
    description:
      "Emily, a college student, found a mentor through PathFinder who helped her clarify her career goals and secure an internship in her desired field.",
  },
];

const SuccessStories = () => {
  return (
    <>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Success Stories
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {/* Render each story as a SuccessCard */}
          {stories.map((story, idx) => (
            <SuccessCard key={idx} {...story} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
