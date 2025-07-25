
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RoadmapStep from "../components/RoadmapStep";

const careerData = {
  "web-developer": {
    title: "Web Developer Roadmap",
    desc: "Master front-end, back-end, and deployment to become a full-stack web developer.",
    steps: [
      { title: "Step 1: Learn HTML, CSS & Git", desc: "Build static web pages and version control using Git/GitHub." },
      { title: "Step 2: Master JavaScript Fundamentals", desc: "Understand variables, functions, DOM, and ES6+ features." },
      { title: "Step 3: Learn Front-End Frameworks", desc: "Get proficient in React.js or Vue.js." },
      { title: "Step 4: Responsive Design & Accessibility", desc: "Build mobile-friendly, accessible interfaces using Flexbox, Grid, ARIA." },
      { title: "Step 5: Learn Backend Development", desc: "Pick Node.js/Express and connect with databases like MongoDB or PostgreSQL." },
      { title: "Step 6: Authentication & Security", desc: "Implement login, JWT, HTTPS, and data validation." },
      { title: "Step 7: APIs & REST/GraphQL", desc: "Build and consume RESTful APIs or GraphQL APIs." },
      { title: "Step 8: DevOps & Deployment", desc: "Deploy apps using Vercel, Netlify, or Docker on cloud platforms." },
      { title: "Step 9: Build Full Projects", desc: "Create and deploy full-stack apps like blog, e-commerce, or portfolio." }
    ]
  },
  "data-scientist": {
    title: "Data Scientist Roadmap",
    desc: "Analyze, model, and visualize data to drive insights and decisions.",
    steps: [
      { title: "Step 1: Learn Python & Data Libraries", desc: "Use Pandas, NumPy, and Jupyter notebooks." },
      { title: "Step 2: Master SQL", desc: "Query structured data efficiently using SQL." },
      { title: "Step 3: Data Cleaning & Preprocessing", desc: "Handle missing values, outliers, and scaling." },
      { title: "Step 4: Exploratory Data Analysis (EDA)", desc: "Use data visualization to find patterns with matplotlib, seaborn." },
      { title: "Step 5: Learn Statistics & Probability", desc: "Understand distributions, hypothesis testing, p-values." },
      { title: "Step 6: Machine Learning Fundamentals", desc: "Apply regression, classification, clustering with scikit-learn." },
      { title: "Step 7: Model Evaluation & Tuning", desc: "Use confusion matrix, ROC, cross-validation, GridSearchCV." },
      { title: "Step 8: Real-World Projects", desc: "Build dashboards, churn models, or price predictors." },
      { title: "Step 9: Deployment & Collaboration", desc: "Deploy with Flask or Streamlit and use GitHub." }
    ]
  },
  "ai-engineer": {
    title: "AI Engineer Roadmap",
    desc: "Build intelligent systems with ML, deep learning, and AI models.",
    steps: [
      { title: "Step 1: Python & Math for AI", desc: "Linear algebra, calculus, and statistics using NumPy and Matplotlib." },
      { title: "Step 2: Classical ML Algorithms", desc: "Implement regression, k-NN, decision trees, SVM using scikit-learn." },
      { title: "Step 3: Deep Learning Basics", desc: "Understand MLPs, backpropagation, activation functions." },
      { title: "Step 4: Master Neural Networks", desc: "Build CNNs, RNNs using TensorFlow and PyTorch." },
      { title: "Step 5: Learn NLP & Computer Vision", desc: "Tokenization, transformers, and image classification models." },
      { title: "Step 6: Train & Optimize Models", desc: "Use GPUs, loss functions, optimizers like Adam/SGD." },
      { title: "Step 7: AI Ethics & Explainability", desc: "Understand fairness, bias, and model interpretability." },
      { title: "Step 8: Build AI Projects", desc: "Projects like image captioning, chatbots, or recommender systems." },
      { title: "Step 9: Production & MLOps", desc: "Deploy AI models using Docker, FastAPI, and CI/CD." }
    ]
  },
  "product-manager": {
    title: "Product Manager Roadmap",
    desc: "Drive product vision, strategy, and execution across teams.",
    steps: [
      { title: "Step 1: Understand Product Fundamentals", desc: "Learn about product lifecycle and Agile/Scrum methodologies." },
      { title: "Step 2: Market & User Research", desc: "Conduct surveys, interviews, and build personas." },
      { title: "Step 3: Define Vision & Strategy", desc: "Write vision statements, roadmaps, and OKRs." },
      { title: "Step 4: Prioritization Frameworks", desc: "Use MoSCoW, RICE, or Kano models." },
      { title: "Step 5: Writing Requirements", desc: "Create user stories and PRDs (Product Requirement Docs)." },
      { title: "Step 6: Work with Cross-Functional Teams", desc: "Collaborate with design, engineering, and marketing." },
      { title: "Step 7: Measure & Improve", desc: "Define KPIs and use tools like Mixpanel or Amplitude." },
      { title: "Step 8: Launch & Feedback Loops", desc: "Plan releases and iterate based on user input." },
      { title: "Step 9: Build a PM Portfolio", desc: "Showcase case studies and product decisions." }
    ]
  },
  "ux-ui-designer": {
    title: "UX/UI Designer Roadmap",
    desc: "Design seamless, user-centric digital interfaces.",
    steps: [
      { title: "Step 1: UX & Design Principles", desc: "Learn color theory, typography, spacing, and visual hierarchy." },
      { title: "Step 2: Research & Empathy", desc: "Conduct user interviews, create personas and user journeys." },
      { title: "Step 3: Wireframing & Prototyping", desc: "Use tools like Figma, Sketch, Balsamiq." },
      { title: "Step 4: Interaction Design", desc: "Design animations, transitions, and micro-interactions." },
      { title: "Step 5: UI Design Systems", desc: "Create reusable components and follow design tokens." },
      { title: "Step 6: Usability Testing", desc: "Conduct A/B tests, card sorting, and feedback sessions." },
      { title: "Step 7: Accessibility in Design", desc: "Follow WCAG, contrast ratios, keyboard navigation." },
      { title: "Step 8: Collaborating with Developers", desc: "Use handoff tools like Zeplin, Figma Inspect, and version control." },
      { title: "Step 9: Portfolio Projects", desc: "Design mobile and web apps, document your design process." }
    ]
  },
  "digital-marketer": {
    title: "Digital Marketer Roadmap",
    desc: "Grow brands using SEO, content, social, and paid media.",
    steps: [
      { title: "Step 1: Marketing Fundamentals", desc: "Understand marketing funnels, 4Ps, customer journey." },
      { title: "Step 2: Content Marketing", desc: "Blogging, copywriting, and content strategy." },
      { title: "Step 3: SEO & SEM", desc: "Keyword research, Google Ads, technical SEO." },
      { title: "Step 4: Social Media Strategy", desc: "Platform targeting, campaigns, and analytics." },
      { title: "Step 5: Email Marketing & CRM", desc: "Mailchimp, automation, segmentation." },
      { title: "Step 6: Web Analytics", desc: "Use Google Analytics, Tag Manager, heatmaps." },
      { title: "Step 7: Paid Advertising", desc: "Facebook Ads, LinkedIn Ads, ROAS measurement." },
      { title: "Step 8: Conversion Optimization", desc: "A/B testing, landing page design, user flow analysis." },
      { title: "Step 9: Digital Marketing Projects", desc: "Run campaigns and build a portfolio with results." }
    ]
  }
};

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

  const toggleSave = () => setIsSaved((prev) => !prev);

  const career = careerData[careerId];
  if (!career)
    return <div className="text-center py-10">No roadmap found.</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 flex justify-center py-5">
      <div className="flex flex-col max-w-[960px] w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 p-4">
          <div>
            <p className="text-[#111418] text-2xl sm:text-3xl font-bold leading-tight">
              {career.title}
            </p>
            <p className="text-[#60758a] text-sm sm:text-base font-normal mt-1 max-w-[600px]">
              {career.desc}
            </p>
          </div>
          <button
            onClick={toggleSave}
            className={`text-sm sm:text-base px-4 py-2 rounded-md border transition-colors duration-200 ${
              isSaved
                ? "bg-green-100 text-green-700 border-green-500 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            }`}
          >
            {isSaved ? "Unsave Roadmap" : "Save Roadmap"}
          </button>
        </div>
        {/* Steps */}
        <div className="grid grid-cols-[40px_1fr] gap-x-2 gap-y-4 px-4 pb-8 sm:gap-y-6">
          {career.steps.map((step, idx) => (
            <RoadmapStep
              key={idx}
              idx={idx}
              step={step}
              checked={completedSteps.includes(idx)}
              onToggle={toggleStepCompletion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPathDetails;
