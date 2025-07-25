import { Link } from "react-router-dom";
import JourneyToSuccess from "../components/JourneyToSuccess";
import SuccessStories from "../components/SuccessStories";
import GettingStarted from "../components/GettingStarted";
import image from "../assets/HImage.jpg";

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
    bg: "bg-white",
    text: "text-[#111418]",
  },
];

const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-40 flex justify-center py-6">
        <div className="flex flex-col max-w-[960px] w-full">

          {/* Hero Section - Split Layout */}
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden min-h-[60vh]">
            
            {/* Image section */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src={image}
                alt="Career Path"
                className="w-full h-[300px] md:h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-6 py-10">
              <h1 className="text-[#0c7ff2] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Discover Your Ideal Career Path
              </h1>
              <p className="text-[#111418] text-base sm:text-lg font-light leading-relaxed mb-8">
                PathFinder helps students explore personalized career paths, follow curated skill roadmaps, and connect with mentors.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {ctaButtons.map((btn, index) => (
                  <Link
                    key={index}
                    to={btn.link}
                    className={`flex min-w-[120px] sm:min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 font-semibold transition-colors duration-300 ${btn.bg} ${btn.text} hover:opacity-90`}
                  >
                    <span className="truncate">{btn.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other sections */}
          <JourneyToSuccess />
          <SuccessStories />
          <GettingStarted />
        </div>
      </div>
    </div>
  );
};

export default Home;
