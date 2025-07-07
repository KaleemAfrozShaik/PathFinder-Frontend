import { Link } from "react-router-dom";
import JourneyToSuccess from "../components/JourneyToSuccess";
import SuccessStories from "../components/SuccessStories";
import GettingStarted from "../components/GettingStarted";

const ctaButtons = [
  {
    label: "Explore Paths",
    link: "/career-paths",
    bg: "bg-[#0c7ff2]",
    text: "text-white",
  },
  {
    label: "Find a Mentor",
    link: "/mentorship",
    bg: "bg-[#f0f2f5]",
    text: "text-[#111418]",
  },
];

const Home = () => {
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBM43FqMtYjvDFvZNz5b5tSRJlg-kJKNHF-ZdIMshzBfT0EYGAW1tVTQfrZBz36QCYwPAnVxWi7mwFpK-8Vj7QqAAqxfjWqxQhXouJKrxZC7zlGLjaDGA_kj1IbGQW8d3DSr4mteMAHIWE33WmbNipcbLuqQERLtV84Mmji-l2JgEZiNzXnzv5EF04QWumXnSBB-2JYp8NK2dFkzxf9K1QqvM8OCzcydgvkt87-gmKwd5zfy0w2KrDZm77IsUvmw9ECmsrw9a4UJG4")',
                }}
              >
                {/* Hero Text */}
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Discover Your Ideal Career Path
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    PathFinder helps students explore personalized career paths, follow curated skill roadmaps, and connect with mentors.
                  </h2>
                </div>

                {/* CTA Buttons - mapped */}
                <div className="flex-wrap gap-3 flex justify-center">
                  {ctaButtons.map((btn, index) => (
                    <Link
                      key={index}
                      to={btn.link}
                      className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 ${btn.bg} ${btn.text} text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]`}
                    >
                      <span className="truncate">{btn.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <JourneyToSuccess />
          <SuccessStories />
          <GettingStarted/>
        </div>
      </div>
    </div>
  );
};

export default Home;