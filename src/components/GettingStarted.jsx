import { Link } from "react-router-dom";

// Button style for reuse
const buttonClass =
  "mt-6 flex h-10 @[480px]:h-12 min-w-[84px] max-w-[480px] px-4 @[480px]:px-5 rounded-lg bg-[#0c7ff2] text-white text-sm font-bold @[480px]:text-base items-center justify-center";

const GettingStarted = () => {
  return (
    <div className="w-full bg-white py-10 px-4 @[480px]:py-20 @[480px]:px-10 flex flex-col items-center justify-center">
      {/* Headline */}
      <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight text-center @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
        Ready to Start Your Journey?
      </h1>
      {/* Call to Action */}
      <Link to="/career-paths" className={buttonClass}>
        <span className="truncate">Get Started Today</span>
      </Link>
    </div>
  );
};

export default GettingStarted;