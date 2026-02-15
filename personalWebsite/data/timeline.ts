export interface TimelineEntry {
  id: string;
  year: number;
  month?: string;
  endMonth?: string;
  company: string;
  role: string;
  location: string;
  type: 'internship' | 'education' | 'milestone';
  highlights: string[];
  techTags: string[];
  trackPosition: number; // 0-100 for visual track marker position
}

export const timelineData: TimelineEntry[] = [
  {
    id: 'motorola-2022',
    year: 2022,
    month: 'May',
    endMonth: 'Aug',
    company: 'Motorola Solutions',
    role: 'Software Engineer Intern',
    location: 'Schaumburg, IL',
    type: 'internship',
    highlights: [
      'Python scripts for real-time cloud status panel',
      'Airflow ETL pipeline demonstrating advantages over Oracle ODI',
    ],
    techTags: ['Python', 'Airflow', 'ETL'],
    trackPosition: 0,
  },
  {
    id: 'country-2023',
    year: 2023,
    month: 'Jan',
    endMonth: 'Dec',
    company: 'COUNTRY Financial',
    role: 'Software Engineer Intern',
    location: 'Champaign, IL',
    type: 'internship',
    highlights: [
      'Robot Framework API automation tests via GitLab CI/CD',
      'Led team of 3: Java + Spring Boot QR code generator, saved $5k/year',
      'Migrated legacy app to Azure Web Apps with load balancing + CI/CD',
    ],
    techTags: ['Java', 'Spring Boot', 'Azure', 'CI/CD'],
    trackPosition: 20,
  },
  {
    id: 'motorola-2023',
    year: 2023,
    month: 'May',
    endMonth: 'Aug',
    company: 'Motorola Solutions',
    role: 'Data Science Intern',
    location: 'Chicago, IL',
    type: 'internship',
    highlights: [
      'Streamlit app for tropospheric ducting/weather impacts',
      'Gradient Boost Regression for alarm patterns',
      'Alarm suppression: -20% redundant alarms',
    ],
    techTags: ['Python', 'ML', 'Streamlit'],
    trackPosition: 30,
  },
  {
    id: 'rsm-2024',
    year: 2024,
    month: 'May',
    endMonth: 'Aug',
    company: 'RSM US LLP',
    role: 'Technology Consulting Intern',
    location: 'Chicago, IL',
    type: 'internship',
    highlights: [
      'Power Apps + Power Automate for client workflows',
      'Integrated Microsoft Copilot AI',
      'UAT sessions and technical documentation',
    ],
    techTags: ['Power Platform', 'Copilot', 'Azure'],
    trackPosition: 50,
  },
  {
    id: 'motorola-2025',
    year: 2025,
    month: 'May',
    endMonth: 'Aug',
    company: 'Motorola Solutions',
    role: 'Data Science Intern',
    location: 'Chicago, IL',
    type: 'internship',
    highlights: [
      'Built ~$2M virtual agent POC on Genesys PureCloud',
      'NLP agent: 10,000+ hours saved, -15% call volume',
      'Agentic framework: LangChain + FastAPI + Docker',
    ],
    techTags: ['NLP', 'LangChain', 'FastAPI', 'Docker'],
    trackPosition: 75,
  },
  {
    id: 'ms-2026',
    year: 2026,
    month: 'May',
    company: 'UIUC',
    role: 'M.S. Computer Science (AI Track)',
    location: 'Champaign, IL',
    type: 'education',
    highlights: ['Expected graduation', 'GPA: 4.00', 'AI/ML specialization'],
    techTags: ['ML', 'AI', 'Research'],
    trackPosition: 100,
  },
];

// Helper to get unique years from timeline
export const timelineYears = [...new Set(timelineData.map((e) => e.year))].sort();

// Helper to get entries by year
export function getEntriesByYear(year: number): TimelineEntry[] {
  return timelineData.filter((e) => e.year === year);
}
