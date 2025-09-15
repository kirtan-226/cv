// TODO Add a couple lines about each project
const data = [
  // {
  //   title: 'Nearest Dollar',
  //   subtitle: '2015 BVP Hackathon',
  //   image: '/images/projects/nearestdollar.jpg',
  //   date: '2015-11-20',
  //   desc:
  //     'Built for a social impact hackathon. '
  //     + 'NearestDollar connected to your bank accounts, credit cards, '
  //     + 'or debit cards and rounded up your purchases to donate the balance to '
  //     + 'the charity of your choice.',
  // },
  {
    title: 'LegalLens: AI-Powered Housing Contract Fraud Detector',
    subtitle: 'Generative AI System for Secure Rental Agreements',
    link: 'https://contract-ai-7yyh.vercel.app/',
    image: '/images/projects/legallens.png',
    date: '2025-09-15',
    desc:
      'Designed and implemented ContractShield, a Generative AI system for detecting fraudulent housing contracts.'
      + 'Built a Node.js backend with PDF ingestion pipeline, integrating Python NLP/LLM scripts for contract text analysis.'
      + 'Leveraged OpenAI models alongside heuristic rules to identify suspicious clauses and anomalies.'
      + 'Developed an interactive React.js frontend for uploading contracts, visualizing analysis, and displaying fraud risk scores.'
      + 'Achieved end-to-end automation of PDF extraction → LLM evaluation → risk scoring → user feedback, enabling reliable contract verification.',
  },
  {
    title: 'Transparent User Profiling',
    subtitle: 'Personalized news delivery with transparent user profiles',
    link: 'https://github.com/kirtan-226/transparent-user-profiling',
    image: '/images/projects/transparentprofiling.png',
    date: '2025-05-1',
    desc:
      'Transparent User Profiling is a Python-based news aggregation platform with a full-stack architecture. The backend uses FastAPI and connects to MongoDB for user authentication, token management, and scheduled news retrieval. A Dash and Bootstrap frontend provides login and registration pages, category filtering, preference management, and article recommendations. Personalized recommendations use NLP techniques to extract keywords and analyze user preferences. Overall, the project demonstrates expertise in backend development, frontend design, and basic natural language processing.',
  },
  {
    title: 'Cucina',
    subtitle: 'Dish recommendor for restaurants',
    link: 'https://github.com/taifarif94/cucina',
    image: '/images/projects/cucina.png',
    date: '2024-11-1',
    desc:
      'Developed a full-stack proof of concept for a restaurant recommendation system. Implemented React interfaces for custom menu creation, created Express/Node.js services for login (including Google OAuth), and established a MySQL connection for persistence. The design lays the foundation for collaborative and context-based food recommendations.',
  },
  {
    title: 'AR-Enabled Intruder Detection System',
    subtitle: 'Innovative security solution developed during a hackathon.',
    image: '/images/projects/intruderdetect.jpg',
    date: '2022-10-08',
    desc:
      'Created an intruder detection system using AR cameras integrated with machine learning models. '
      + 'Designed to enhance real-time security by accurately identifying threats through augmented reality. ',
  },
];

export default data;
