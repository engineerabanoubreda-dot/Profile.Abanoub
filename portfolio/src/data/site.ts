/**
 * Central content file.
 * Everything shown on the site comes from here. Facts were taken from the
 * CV, LinkedIn profile export and portfolio PDF. Edit this file to update the site.
 */

export const profile = {
  name: "Abanoub Reda Gamil",
  shortName: "Abanoub Reda",
  title: "AI & Machine Learning Engineer",
  roles: ["AI & Machine Learning Engineer", "Data Analyst", "Full-Stack Developer"],
  location: "Mansoura, Dakahlia, Egypt",
  email: "engineer.abanoub.reda@gmail.com",
  github: "https://github.com/engineerabanoubreda-dot",
  linkedin: "https://www.linkedin.com/in/abanoub-reda-gamil",
  cv: "/Abanoub_Reda_Gamil_CV.pdf",
  intro:
    "I'm a Management Information Systems student in Mansoura. I build machine learning models, BI dashboards and Flutter apps, and I like projects where I can start with a messy dataset or a business question and end up with something people can use.",
  status: "Seeking entry-level and internship opportunities in data and AI",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
] as const;

export const atAGlance = [
  { label: "Studying", value: "MIS (BIS), 3rd year" },
  { label: "University", value: "MET, Mansoura" },
  { label: "Focus", value: "ML, data analytics, Flutter" },
  { label: "Languages", value: "Arabic (native), English (professional)" },
] as const;

export const about = {
  paragraphs: [
    "I'm studying Management Information Systems (Business Information Systems track) at the Misr Higher Institute in Mansoura, expecting to graduate in 2027. MIS sits between business and technology, which suits how I like to work: understand the problem first, then pick the tools.",
    "I got into data and machine learning because I enjoy finding patterns in data and turning them into something useful: a prediction, a dashboard, a decision. Most of my learning has been hands-on, through training programs (ITI, NVIDIA, Google, DEPI) and personal projects that I build from raw data to a working result.",
    "I'm early in my career, still a student, and I'm looking for a team where I can keep building, learn from experienced engineers and contribute to real work.",
  ],
  interests: [
    "Machine learning and deep learning",
    "Data analytics and business intelligence",
    "Generative AI and LLM applications",
    "Software and mobile development",
  ],
  workflow: [
    { title: "Business problem", text: "Define the goal and requirements" },
    { title: "Data collection", text: "Gather and structure raw datasets" },
    { title: "Data cleaning", text: "Handle nulls, outliers and inconsistencies" },
    { title: "Feature engineering", text: "Selection, encoding and transformation" },
    { title: "Model development", text: "Train, tune and optimize models" },
  ],
} as const;

export type SkillGroup = { title: string; icon: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Programming", icon: "code", items: ["Python", "SQL", "Dart"] },
  {
    title: "Data & Analytics",
    icon: "chart",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Power BI",
      "Tableau",
      "Excel",
      "KPIs & Dashboards",
    ],
  },
  {
    title: "Machine Learning / AI",
    icon: "brain",
    items: [
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "Gradient Boosting",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Feature Engineering",
      "Model Evaluation",
      "NLP",
      "Generative AI",
      "Prompt Engineering",
    ],
  },
  {
    title: "Development",
    icon: "layers",
    items: [
      "Flutter",
      "Firebase",
      "APIs",
      "Streamlit",
      "FastAPI",
      "Git & GitHub",
      "VS Code",
      "Jupyter",
      "Google Colab",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["SQL Server", "SQL", "Joins & Aggregation", "Relational Database Concepts"],
  },
];

export const softSkills = [
  { title: "Problem Solving", text: "Turning a business question into a measurable technical problem." },
  { title: "Analytical Thinking", text: "Exploring the data and checking results with proper metrics before trusting them." },
  { title: "Communication", text: "Professional working English, and presenting findings in clear summaries." },
  { title: "Teamwork", text: "Worked with other participants in structured technical workshops and training programs." },
  { title: "Adaptability", text: "Moved between data analysis, machine learning and mobile development." },
  { title: "Continuous Learning", text: "Several ITI, NVIDIA, Google and DEPI programs completed or in progress." },
] as const;

export type Project = {
  title: string;
  kind: string;
  date?: string;
  problem: string;
  solution: string;
  stack: string[];
  result: string;
  facts?: { label: string; value: string }[];
  links?: { label: string; href: string }[];
};

/** Add `links: [{ label: "Code", href: "https://github.com/..." }]` to a project to show a link. */
export const projects: Project[] = [
  {
    title: "E-Commerce Business Intelligence & Customer Analytics",
    kind: "Business intelligence",
    problem:
      "An e-commerce business needs to understand its sales and customers through clear KPIs instead of raw tables.",
    solution:
      "End-to-end analysis: querying and shaping the data with SQL, exploring it in Python, and building dashboards with KPIs in Power BI and Tableau.",
    stack: ["SQL", "Python", "Power BI", "Tableau"],
    result: "Dashboards and KPI reporting designed to support business decisions.",
  },
  {
    title: "Marine Vessel ETA Prediction",
    kind: "Machine learning · Regression",
    problem: "Estimating vessel arrival times accurately is a core logistics problem in maritime transport.",
    solution:
      "Large-scale regression workflow: cleaned the raw data, engineered features, then trained and tuned a Random Forest model.",
    stack: ["Python", "Pandas", "Scikit-learn"],
    result: "Tuned Random Forest reached R² ≈ 0.9998 on the cleaned dataset.",
    facts: [
      { label: "Source rows", value: "334,210" },
      { label: "After cleaning", value: "42,607" },
      { label: "R²", value: "≈ 0.9998" },
    ],
  },
  {
    title: "Airline Delay Prediction",
    kind: "Machine learning · Regression",
    problem: "Flight delays are costly and hard to anticipate from a large number of operational variables.",
    solution: "Prepared a dataset of 181,067 rows and 61 features and trained a Gradient Boosting model to predict delays.",
    stack: ["Python", "Pandas", "Gradient Boosting"],
    result: "Gradient Boosting model reached R² ≈ 0.895.",
    facts: [
      { label: "Rows", value: "181,067" },
      { label: "Features", value: "61" },
      { label: "R²", value: "≈ 0.895" },
    ],
  },
  {
    title: "CodeSphere (Flutter App)",
    kind: "Mobile development",
    problem: "A mobile app needs a clean, responsive interface and a backend to manage its data.",
    solution: "Built a Flutter app in Dart with a responsive interface, API integration, and Firebase for data management.",
    stack: ["Flutter", "Dart", "Firebase", "APIs"],
    result: "A Flutter application with a responsive UI, API integration and Firebase-backed data management.",
  },
  {
    title: "Real Estate Price Prediction Web App",
    kind: "Machine learning · Regression",
    date: "May 2026",
    problem: "Property prices depend on many features and are hard to estimate without a model.",
    solution:
      "Led the project end to end: data cleaning, feature engineering and comparison of regression models, then deployed an interactive Streamlit interface.",
    stack: ["Python", "Scikit-learn", "XGBoost", "TensorFlow", "Streamlit"],
    result: "XGBoost scored R² ≈ 0.713 and Random Forest R² ≈ 0.701 on the test comparison.",
    facts: [
      { label: "Records", value: "39,903" },
      { label: "Features", value: "21" },
      { label: "Best R² (XGBoost)", value: "≈ 0.713" },
    ],
  },
  {
    title: "Supply Chain & Late Delivery Risk",
    kind: "Analytics · Prediction",
    problem: "Late deliveries hurt supply chain performance, and the business needs to know where the risk is.",
    solution: "Business analytics and prediction on 180,519 source rows using Python, Pandas, machine learning and BI.",
    stack: ["Python", "Pandas", "Machine Learning", "BI"],
    result: "Identified that about 54.8% of deliveries in the dataset were late.",
    facts: [
      { label: "Source rows", value: "180,519" },
      { label: "Late deliveries", value: "≈ 54.8%" },
    ],
  },
  {
    title: "Diabetes Prediction Model",
    kind: "Machine learning · Classification",
    date: "May 2026",
    problem: "Assessing health risk from patient metrics is a binary classification task.",
    solution: "Built classifiers, including a TensorFlow deep neural network, to predict diabetes risk from health metrics.",
    stack: ["Python", "Scikit-learn", "TensorFlow"],
    result: "Models evaluated with accuracy, precision, recall and ROC-AUC to check the predictions were reliable.",
  },
];

export const education = {
  degree: "Bachelor's in Management Information Systems (MIS)",
  track: "Business Information Systems (BIS)",
  school: "Misr Higher Institute for Commerce and Computers (MET), Mansoura",
  period: "2023 – 2027 (expected)",
  note: "Currently a third-year student.",
} as const;

export const training = [
  {
    title: "Build with AI: Masr Edition",
    org: "Google for Developers & ITI",
    period: "Apr 2026 – May 2026",
    text: "Competitive Google Cloud and AI initiative supported by ITI. Applied cloud tools and explored generative AI in structured workshops.",
  },
  {
    title: "Data Analysis Track (DEPI)",
    org: "Digital Egypt Pioneers Initiative / Ro'ad Masr",
    period: "Jun 2026 – Dec 2026",
    text: "Data analysis training track.",
  },
  {
    title: "Mobile Application Development (Flutter)",
    org: "Information Technology Institute (ITI)",
    period: "Jul 2026 – Aug 2026",
    text: "Mobile app development training with Flutter.",
  },
  {
    title: "Data Analysis Internship",
    org: "iCareer",
    period: "Dec 2025 – Jan 2026",
    text: "Structured training in data cleaning, exploratory data analysis and business intelligence reporting, using Excel and Python to present findings.",
  },
  {
    title: "MCIT Program",
    org: "Ministry of Communications and Information Technology",
    period: "May 2026 – Jul 2026",
    text: "Program listed on my LinkedIn profile.",
  },
] as const;

export const certificates = [
  { title: "Data Fundamentals", org: "IBM SkillsBuild (Credly)", year: "2026" },
  { title: "Building LLM Applications with Prompt Engineering", org: "NVIDIA Deep Learning Institute", year: "2026" },
  { title: "AI for All: From Basics to GenAI Practice", org: "NVIDIA Academy", year: "2026" },
  { title: "AI and Machine Learning Training", org: "Information Technology Institute (ITI)", year: "2026" },
  { title: "Fundamentals of Digital Marketing", org: "Google, Banque Misr & Digitera", year: "2025" },
  { title: "Python Programming Basics & Database Fundamentals", org: "MaharaTech & ITI", year: "2025" },
  { title: "Professional Machine Learning for Data Scientists", org: "ITI / MaharaTech / AI Academy" },
  { title: "Generative AI, Beginner Level", org: "NVIDIA DLI / ITI" },
  { title: "Freelancing Training", org: "ITIDA & eYouth" },
] as const;
