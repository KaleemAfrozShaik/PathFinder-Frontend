// Features data outside the component for clarity
const features = [
  {
    title: "Personalized Career Paths",
    description: "Explore a wide range of career options tailored to your interests and skills.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M235.92,199A8,8,0,0,1,225,195.92L155.32,72H136v8a8,8,0,0,1-16,0V72H100.68L31,195.92A8,8,0,0,1,17,188.08L82.32,72H24a8,8,0,0,1,0-16H232a8,8,0,0,1,0,16H173.68L239,188.08A8,8,0,0,1,235.92,199ZM128,112a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V120A8,8,0,0,0,128,112Zm0,56a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V176A8,8,0,0,0,128,168Z" />
      </svg>
    ),
  },
  {
    title: "Curated Skill Roadmaps",
    description: "Follow step-by-step roadmaps designed to help you acquire the necessary skills for your chosen career.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z" />
      </svg>
    ),
  },
  {
    title: "Connect with Mentors",
    description: "Connect with experienced professionals who can provide guidance and support on your journey.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
      </svg>
    ),
  },
];

// Feature card subcomponent
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4">
    <div className="text-[#111418]">{icon}</div>
    <div className="flex flex-col gap-1">
      <h2 className="text-[#111418] text-base font-bold leading-tight">{title}</h2>
      <p className="text-[#60758a] text-sm font-normal leading-normal">{description}</p>
    </div>
  </div>
);

const JourneyToSuccess = () => {
  return (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
      {/* Headline and description */}
      <div className="flex flex-col gap-4">
        <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Your Journey to Success
        </h1>
        <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
          PathFinder provides the tools and resources you need to navigate your career path effectively.
        </p>
      </div>
      {/* Features grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default JourneyToSuccess;