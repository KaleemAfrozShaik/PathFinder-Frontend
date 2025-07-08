import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CareerPathDetails = () => {
  const { careerId } = useParams();
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const toggleStepCompletion = (index) => {
    setCompletedSteps((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleSave = () => {
    setIsSaved((prev) => !prev);
  };

 const careerData = {
    "web-developer": {
      title: "Software Engineer Roadmap",
      desc: "Follow this roadmap to become a skilled software engineer...",
      steps: [
        { title: "Step 1: Foundations of Programming", desc: "Learn Python or Java..." },
        { title: "Step 2: Data Structures and Algorithms", desc: "Master DSA..." },
        { title: "Step 3: Web Development Basics", desc: "HTML, CSS, JS..." },
        { title: "Step 4: Advanced Frameworks", desc: "React, Angular..." },
        { title: "Step 5: Real Projects", desc: "Deploy apps..." }
      ],
    },
    "data-scientist": {
      title: "Data Scientist Roadmap",
      desc: "Learn data collection, analysis, visualization, and ML to become a Data Scientist.",
      steps: [
        { title: "Step 1: Learn Python & SQL", desc: "Get hands-on with data-oriented languages." },
        { title: "Step 2: Statistics & Probability", desc: "Understand core statistical principles." },
        { title: "Step 3: Data Visualization", desc: "Use tools like Matplotlib, Seaborn, PowerBI." },
        { title: "Step 4: Machine Learning Basics", desc: "Supervised and unsupervised ML." },
        { title: "Step 5: Real Projects & Deployment", desc: "Kaggle, Flask APIs, Streamlit dashboards." }
      ],
    },
    "ai-engineer": {
      title: "AI Engineer Roadmap",
      desc: "Build intelligent systems by mastering machine learning, deep learning, and neural networks.",
      steps: [
        { title: "Step 1: Python & Math Basics", desc: "Focus on linear algebra, calculus, stats." },
        { title: "Step 2: ML Fundamentals", desc: "Scikit-learn, decision trees, SVM, etc." },
        { title: "Step 3: Deep Learning", desc: "Understand neural networks, CNN, RNN." },
        { title: "Step 4: Frameworks", desc: "Learn TensorFlow, PyTorch." },
        { title: "Step 5: Projects & Research", desc: "Create models for real use cases or papers." }
      ]
    },
    "product-manager": {
      title: "Product Manager Roadmap",
      desc: "Lead product strategy, user research, and feature delivery.",
      steps: [
        { title: "Step 1: Understand Product Lifecycle", desc: "Learn ideation to sunset phases." },
        { title: "Step 2: Market Research", desc: "User personas, competitive analysis." },
        { title: "Step 3: Roadmapping & Prioritization", desc: "Jira, Trello, MoSCoW method." },
        { title: "Step 4: Cross-functional Collaboration", desc: "Work with design, dev, and sales teams." },
        { title: "Step 5: Data-driven Decisions", desc: "Analytics tools, KPIs, and A/B testing." }
      ]
    },
    "ux-ui-designer": {
      title: "UX/UI Designer Roadmap",
      desc: "Design beautiful and user-friendly digital experiences.",
      steps: [
        { title: "Step 1: Design Principles", desc: "Color theory, typography, balance." },
        { title: "Step 2: Tools & Wireframing", desc: "Figma, Adobe XD, Sketch basics." },
        { title: "Step 3: Prototyping & User Flows", desc: "Create interactive mockups." },
        { title: "Step 4: UX Research", desc: "Conduct user interviews, usability tests." },
        { title: "Step 5: Portfolio & Collaboration", desc: "Build a case study portfolio, work with teams." }
      ]
    },
    "digital-marketer": {
      title: "Digital Marketer Roadmap",
      desc: "Master digital channels to promote brands and convert users.",
      steps: [
        { title: "Step 1: Marketing Fundamentals", desc: "4Ps, buyer journey, funnels." },
        { title: "Step 2: SEO & SEM", desc: "Google Ads, keyword research, backlinks." },
        { title: "Step 3: Social Media Marketing", desc: "Instagram, LinkedIn, content strategy." },
        { title: "Step 4: Email Marketing & Automation", desc: "Mailchimp, drip campaigns." },
        { title: "Step 5: Analytics & Conversion Optimization", desc: "Google Analytics, A/B testing." }
      ]
    }
  };
  const career = careerData[careerId];

  if (!career) return <div className="text-center py-10">No roadmap found.</div>;

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Header */}
        <div className="flex justify-between items-start gap-3 p-4">
          <div className="flex flex-col gap-2">
            <p className="text-[#111418] text-[32px] font-bold leading-tight">{career.title}</p>
            <p className="text-[#60758a] text-sm font-normal">{career.desc}</p>
          </div>
          <button
            onClick={toggleSave}
            className={`text-sm px-4 py-2 rounded-md border ${
              isSaved
                ? "bg-green-100 text-green-700 border-green-500"
                : "bg-gray-100 text-gray-600 border-gray-300"
            }`}
          >
            {isSaved ? "Unsave Roadmap" : "Save Roadmap"}
          </button>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          {career.steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-1 pt-3">
                <input
                  type="checkbox"
                  checked={completedSteps.includes(idx)}
                  onChange={() => toggleStepCompletion(idx)}
                  className="w-5 h-5 accent-green-600 cursor-pointer"
                />
                <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
              </div>
              <div className="flex flex-col py-3">
                <p className="text-[#111418] text-base font-medium">
                  {step.title}
                </p>
                <p className="text-[#60758a] text-sm">{step.desc}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPathDetails;