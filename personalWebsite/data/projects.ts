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
    id: 'project-1',
    slug: 'virtual-agent-platform',
    title: 'Virtual Agent Platform',
    tagline: 'NLP-powered customer service automation',
    description:
      'Enterprise virtual agent system using LangChain and FastAPI for intelligent call routing and response generation.',
    category: 'research',
    featured: true,
    problem:
      'TODO: Describe the business problem - high call volumes, long wait times, repetitive queries',
    approach:
      'TODO: Describe the technical approach - NLP pipeline, intent classification, response generation',
    results:
      'TODO: Quantify results - hours saved, call volume reduction, accuracy metrics',
    techStack: ['Python', 'LangChain', 'FastAPI', 'Docker', 'NLP'],
    links: {
      github: 'TODO: Add GitHub link',
    },
  },
  {
    id: 'project-2',
    slug: 'weather-impact-analysis',
    title: 'Weather Impact Analysis',
    tagline: 'ML model for network infrastructure alerts',
    description:
      'Streamlit application analyzing tropospheric ducting and weather impacts on communication towers.',
    category: 'research',
    featured: true,
    problem: 'TODO: Describe the infrastructure monitoring challenges',
    approach:
      'TODO: Describe the ML approach - Gradient Boost Regression, feature engineering',
    results: 'TODO: Quantify results - alarm reduction, processing time improvement',
    techStack: ['Python', 'Streamlit', 'scikit-learn', 'Pandas'],
    links: {
      github: 'TODO: Add GitHub link',
    },
  },
  {
    id: 'project-3',
    slug: 'etl-pipeline-modernization',
    title: 'ETL Pipeline Modernization',
    tagline: 'Airflow-based data pipeline architecture',
    description:
      'Modern ETL pipeline demonstrating advantages over legacy Oracle ODI workflows.',
    category: 'cloud',
    featured: false,
    problem: 'TODO: Describe legacy system limitations',
    approach: 'TODO: Describe Airflow architecture and migration strategy',
    results: 'TODO: Quantify improvements in reliability, speed, maintainability',
    techStack: ['Python', 'Airflow', 'ETL', 'SQL'],
    links: {
      github: 'TODO: Add GitHub link',
    },
  },
  {
    id: 'project-4',
    slug: 'qr-code-generator',
    title: 'QR Code Generator Service',
    tagline: 'Java microservice saving $5k/year',
    description:
      'Spring Boot microservice for generating QR codes, replacing a costly third-party solution.',
    category: 'systems',
    featured: false,
    problem: 'TODO: Describe the cost and dependency issues with third-party service',
    approach: 'TODO: Describe the Java/Spring Boot implementation',
    results: '$5k/year cost savings, improved reliability and customization',
    techStack: ['Java', 'Spring Boot', 'REST API', 'Azure'],
    links: {
      github: 'TODO: Add GitHub link',
    },
  },
  {
    id: 'project-5',
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
    id: 'project-6',
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

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((p) => p.featured);
}
