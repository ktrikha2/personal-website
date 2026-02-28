export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'internship' | 'fulltime' | 'contract';
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  techTags: string[];
  logo?: string;
  projectIds?: string[]; // Links to projects section
}

export const experienceData: Experience[] = [
  {
    id: 'motorola-2025',
    company: 'Motorola Solutions',
    role: 'Data Science Intern',
    type: 'internship',
    location: 'Chicago, IL',
    startDate: 'May 2025',
    endDate: 'Aug 2025',
    highlights: [
      'Built POC for ~$2M virtual agent initiative on Genesys PureCloud',
      'Deployed NLP virtual agent: 10,000+ hours saved annually, reduced call volume 15%',
      'Python ETL pipeline with Airflow on call transcripts; insights in Power BI',
      'Agentic orchestration framework: LangChain + FastAPI + Docker',
    ],
    techTags: ['Python', 'NLP', 'LangChain', 'FastAPI', 'Docker', 'Airflow', 'Power BI'],
    projectIds: ['transcripts-pipeline', 'nlp-virtual-agent'],
    logo: '/images/motorola.png',
  },
  {
    id: 'rsm-2024',
    company: 'RSM US LLP',
    role: 'Technology Consulting Intern',
    type: 'internship',
    location: 'Chicago, IL',
    startDate: 'May 2024',
    endDate: 'Aug 2024',
    highlights: [
      'Power Apps + Power Automate apps for client workflow efficiency',
      'UAT sessions, requirements, technical documentation, iterative refinement',
      'Integrated Microsoft Copilot AI into Power Platform apps',
    ],
    techTags: ['Power Apps', 'Power Automate', 'Microsoft Copilot', 'Azure'],
    projectIds: ['power-apps-clients'],
    logo: '/images/RSM.png',
  },
  {
    id: 'motorola-2023',
    company: 'Motorola Solutions',
    role: 'Data Science Intern',
    type: 'internship',
    location: 'Chicago, IL',
    startDate: 'May 2023',
    endDate: 'Aug 2023',
    highlights: [
      'Streamlit app for tropospheric ducting/weather impacts on towers',
      'Gradient Boost Regression: alarm patterns + recurrence likelihood',
      'Alarm suppression framework: redundant alarms -20%, processing time -10%',
    ],
    techTags: ['Python', 'Streamlit', 'scikit-learn', 'Machine Learning', 'Data Analysis'],
    projectIds: ['weather-impact-analysis'],
    logo: '/images/motorola.png',
  },
  {
    id: 'country-2023',
    company: 'COUNTRY Financial',
    role: 'Software Engineer Intern',
    type: 'internship',
    location: 'Champaign, IL',
    startDate: 'Jan 2023',
    endDate: 'Dec 2023',
    highlights: [
      'Robot Framework API automation tests via GitLab CI/CD',
      'Led team of 3: Java + Spring Boot QR code generator, saved $5k/year',
      'Migrated legacy app to Azure Web Apps with load balancing + CI/CD',
    ],
    techTags: ['Java', 'Spring Boot', 'Azure', 'CI/CD', 'Robot Framework', 'GitLab'],
    projectIds: ['qr-code-generator'],
    logo: '/images/COUNTRY.png',
  },
  {
    id: 'motorola-2022',
    company: 'Motorola Solutions',
    role: 'Software Engineer Intern',
    type: 'internship',
    location: 'Schaumburg, IL',
    startDate: 'May 2022',
    endDate: 'Aug 2022',
    highlights: [
      'Python scripts for real-time cloud status panel',
      'Airflow ETL pipeline demonstrating advantages over Oracle ODI',
    ],
    techTags: ['Python', 'Airflow', 'ETL', 'Oracle', 'Cloud'],
    projectIds: ['etl-pipeline-modernization'],
    logo: '/images/motorola.png',
  },
];
