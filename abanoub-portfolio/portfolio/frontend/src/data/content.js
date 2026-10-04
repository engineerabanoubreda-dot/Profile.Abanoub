// All site content lives here. Edit this file to update the portfolio.
export const profile = {
  name: 'Abanoub Reda Gamil',
  location: 'Mansoura, Egypt',
  email: 'engineer.abanoub.reda@gmail.com',
  github: 'https://github.com/engineerabanoubreda-dot',
  linkedin: 'https://linkedin.com/in/abanoub-reda-gamil-3184a9432',
  cv: 'Abanoub_Reda_CV.pdf'
};

export const skills = [
  { group: 'Data & analytics', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI'] },
  { group: 'Machine learning & AI', items: ['Scikit-learn', 'Machine Learning', 'Deep Learning', 'Generative AI'] },
  { group: 'Software development', items: ['Flutter', 'Firebase', 'HTML', 'CSS', 'JavaScript', 'Git / GitHub'] }
];

export const projects = [
  { title: 'Marine Vessel ETA Prediction', type: 'Machine learning', text: 'Regression model to estimate vessel arrival times. Cleaned a 334,210-row source down to 42,607 rows, then engineered features and tuned a Random Forest.', result: 'Tuned Random Forest, R² ≈ 0.9998', stack: ['Python', 'Pandas', 'Scikit-learn'] },
  { title: 'Airline Delay Prediction', type: 'Machine learning', text: 'Predicts flight delays from 181,067 rows and 61 features using gradient boosting.', result: 'Gradient Boosting, R² ≈ 0.895', stack: ['Python', 'Pandas', 'Scikit-learn'] },
  { title: 'Real Estate Price Prediction', type: 'Machine learning', text: 'Compared regression models on 39,903 records and 21 features, with EDA and feature engineering.', result: 'XGBoost R² ≈ 0.713, Random Forest R² ≈ 0.701', stack: ['Python', 'EDA', 'XGBoost', 'Random Forest'] },
  { title: 'ASD Screening / Prediction App', type: 'Machine learning application', text: 'Machine learning application for autism spectrum disorder screening prediction.', result: '', stack: ['Python', 'Machine Learning'] },
  { title: 'E-Commerce Business Intelligence & Customer Analytics', type: 'Business intelligence', text: 'End-to-end analysis with SQL and Python, with dashboards and KPIs built in Power BI and Tableau.', result: '', stack: ['SQL', 'Python', 'Power BI', 'Tableau'] },
  { title: 'DataCo Supply Chain Analytics', type: 'Analytics & prediction', text: 'Late-delivery analysis on 180,519 source rows. About 54.8% of deliveries were identified as late.', result: '', stack: ['Python', 'Pandas', 'ML', 'BI'] },
  { title: 'Power BI / SQL Business Intelligence Projects', type: 'Business intelligence', text: 'Reporting and dashboard work built on SQL queries, joins and aggregations.', result: '', stack: ['SQL', 'Power BI'] }
];

export const certifications = [
  { name: 'Data Analysis Track', org: 'Digital Egypt Pioneers Initiative (DEPI)', when: 'Jun 2026 – Dec 2026' },
  { name: 'Mobile Application Development (Flutter)', org: 'Information Technology Institute (ITI)', when: 'Jul – Aug 2026' },
  { name: 'AI and Machine Learning Training', org: 'Information Technology Institute (ITI)', when: '2026' },
  { name: 'Building LLM Applications with Prompt Engineering', org: 'NVIDIA Deep Learning Institute', when: 'Early 2026' },
  { name: 'AI for All', org: 'NVIDIA Academy', when: 'Jan 2026' },
  { name: 'Data Fundamentals', org: 'IBM SkillsBuild / Credly', when: '2026' },
  { name: 'AI training', org: 'NTI / Huawei', when: '' },
  { name: 'Python Programming Basics & Database Fundamentals', org: 'MaharaTech & ITI', when: 'Late 2025' }
];

export const experience = [
  { role: 'Participant, Build with AI: Masr Edition', org: 'Google for Developers & ITI', when: 'Apr – May 2026', text: 'Workshops on Google Cloud tools and generative AI, building practical AI solutions.' },
  { role: 'Data Analysis Intern', org: 'iCareer', when: 'Dec 2025 – Jan 2026', text: 'Training in data cleaning, EDA and BI reporting, using Excel and Python to summarise findings.' },
  { role: 'B.Sc. Management Information Systems', org: 'Misr Higher Institute for Engineering & Technology', when: 'Oct 2023 – Oct 2027', text: 'Currently in the third year.' }
];
