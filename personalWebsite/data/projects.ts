export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: 'side' | 'coursework' | 'research' | 'cloud' | 'systems';
  featured: boolean;
  image?: string;
  problem: string;
  approach: string;
  results: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  startDate?: string;
  endDate?: string;
}

export const projectsData: Project[] = [
  {
    id: 'transcripts-pipeline',
    slug: 'transcripts-pipeline',
    title: 'Transcripts Pipeline & NLP Analytics',
    tagline: 'Python ETL pipeline with Airflow on call transcripts; insights in Power BI',
    description:
      'ETL pipeline processing call transcripts with Airflow, enabling NLP-derived insights visualized in Power BI for customer service optimization.',
    category: 'research',
    featured: true,
    problem: 'Large volumes of call transcript data required processing and analysis for actionable insights.',
    approach: 'Built Python ETL pipeline with Apache Airflow to ingest and process transcripts; integrated NLP analysis for pattern extraction and sentiment.',
    results: 'Enabled data-driven insights for virtual agent training and customer service improvements.',
    techStack: ['Python', 'Airflow', 'NLP', 'Power BI', 'ETL'],
    links: {},
  },
  {
    id: 'nlp-virtual-agent',
    slug: 'nlp-virtual-agent',
    title: 'NLP Virtual Agent',
    tagline: '10,000+ hours saved annually, 15% call volume reduction',
    description:
      'Deployed NLP virtual agent on Genesys PureCloud as part of ~$2M initiative. Agentic orchestration with LangChain, FastAPI, and Docker.',
    category: 'research',
    featured: true,
    problem: 'High call volumes and repetitive queries created inefficiency and long wait times.',
    approach: 'Built agentic orchestration framework with LangChain + FastAPI + Docker; deployed NLP virtual agent on Genesys PureCloud.',
    results: '10,000+ hours saved annually, 15% reduction in call volume.',
    techStack: ['Python', 'LangChain', 'FastAPI', 'Docker', 'NLP'],
    links: {},
  },
  {
    id: 'power-apps-clients',
    slug: 'power-apps-clients',
    title: 'Power Apps for Client Workflows',
    tagline: 'Power Apps + Power Automate solutions for client efficiency',
    description:
      'Power Apps and Power Automate applications built for client workflow efficiency. Integrated Microsoft Copilot AI into Power Platform apps.',
    category: 'side',
    featured: false,
    problem: 'TODO: Add client workflow challenges',
    approach: 'Built custom Power Apps + Power Automate solutions; integrated Microsoft Copilot AI. UAT sessions, requirements gathering, technical documentation.',
    results: 'TODO: Add client impact metrics',
    techStack: ['Power Apps', 'Power Automate', 'Microsoft Copilot', 'Azure'],
    links: {},
  },
  {
    id: 'weather-impact-analysis',
    slug: 'weather-impact-analysis',
    title: 'Weather Impact Analysis / Forecasting Alarms Model',
    tagline: 'ML model for network infrastructure alerts',
    description:
      'Streamlit app for tropospheric ducting and weather impacts on towers. Gradient Boost Regression for alarm patterns and recurrence likelihood.',
    category: 'research',
    featured: true,
    problem: 'Weather and tropospheric ducting impacted communication tower reliability; redundant alarms increased processing load.',
    approach: 'Streamlit app for analysis; Gradient Boost Regression model for alarm patterns and recurrence likelihood; alarm suppression framework.',
    results: 'Redundant alarms reduced by 20%, processing time reduced by 10%.',
    techStack: ['Python', 'Streamlit', 'scikit-learn', 'Pandas', 'Machine Learning'],
    links: {},
  },
  {
    id: 'etl-pipeline-modernization',
    slug: 'etl-pipeline-modernization',
    title: 'ETL Pipeline Modernization',
    tagline: 'Airflow-based data pipeline architecture',
    description:
      'Modern ETL pipeline demonstrating advantages over legacy Oracle ODI workflows.',
    category: 'cloud',
    featured: false,
    problem: 'Legacy Oracle ODI workflows had limitations in maintainability and flexibility.',
    approach: 'Designed and implemented Airflow-based ETL pipeline architecture.',
    results: 'Improved reliability, speed, and maintainability over legacy system.',
    techStack: ['Python', 'Airflow', 'ETL', 'SQL'],
    links: {},
  },
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    title: 'QR Code Generator Service',
    tagline: 'Java microservice saving $5k/year',
    description:
      'Spring Boot microservice for generating QR codes, replacing a costly third-party solution. Led team of 3.',
    category: 'systems',
    featured: false,
    problem: 'Third-party QR code service was costly and created vendor dependency.',
    approach: 'Built Java + Spring Boot microservice for QR code generation.',
    results: '$5k/year cost savings, improved reliability and customization.',
    techStack: ['Java', 'Spring Boot', 'REST API', 'Azure'],
    links: {},
  },
  {
    id: 'deep-learning-cv-project',
    slug: 'deep-learning-cv-project',
    title: 'Computer Vision Project',
    tagline: 'Deep learning for image analysis',
    description: 'TODO: Add coursework project description from Deep Learning for CV class.',
    category: 'coursework',
    featured: false,
    problem: 'TODO: Describe the computer vision problem tackled',
    approach: 'TODO: Describe the deep learning architecture used',
    results: 'TODO: Add performance metrics',
    techStack: ['PyTorch', 'OpenCV', 'Python', 'CUDA'],
    links: {
      github: 'TODO: Add GitHub link',
    },
  },
  {
    id: 'nlp-research-project',
    slug: 'nlp-research-project',
    title: 'NLP Research Project',
    tagline: 'Language model fine-tuning',
    description: 'TODO: Add coursework project description from NLP class.',
    category: 'coursework',
    featured: false,
    problem: 'TODO: Describe the NLP problem tackled',
    approach: 'TODO: Describe the transformer/language model approach',
    results: 'TODO: Add performance metrics',
    techStack: ['Python', 'HuggingFace', 'Transformers', 'PyTorch'],
    links: {
      github: 'TODO: Add GitHub link',
    },
  },
];

export const projectCategories = {
  side: { label: 'Side Projects', color: 'bg-blue-500' },
  coursework: { label: 'Coursework', color: 'bg-emerald-500' },
  research: { label: 'Research / AI', color: 'bg-purple-500' },
  cloud: { label: 'Cloud / Data', color: 'bg-amber-500' },
  systems: { label: 'Systems', color: 'bg-red-500' },
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((p) => p.featured);
}
