export interface Course {
  id: string;
  name: string;
  code?: string;
  category: 'ml' | 'systems' | 'data' | 'theory';
  description?: string;
  project?: {
    title: string;
    description: string;
    tech: string[];
    link?: string;
  };
}

export const courseworkData: Course[] = [
  {
    id: 'hcml',
    name: 'Human Centered Machine Learning',
    category: 'ml',
    description: 'Human-AI interaction, explainability, fairness in ML systems',
    project: {
      title: 'TODO: Add project title',
      description: 'TODO: Add project description',
      tech: ['Python', 'PyTorch'],
    },
  },
  {
    id: 'adv-db',
    name: 'Advanced Database Systems',
    category: 'data',
    description: 'Query optimization, distributed databases, transaction processing',
    project: {
      title: 'TODO: Add project title',
      description: 'TODO: Add project description',
      tech: ['SQL', 'PostgreSQL'],
    },
  },
  {
    id: 'cloud',
    name: 'Cloud Computing Applications',
    category: 'systems',
    description: 'Distributed systems, cloud architecture, scalability patterns',
    project: {
      title: 'TODO: Add project title',
      description: 'TODO: Add project description',
      tech: ['AWS', 'Docker', 'Kubernetes'],
    },
  },
  {
    id: 'nlp',
    name: 'Natural Language Processing',
    category: 'ml',
    description: 'Text processing, transformers, language models, NLU/NLG',
    project: {
      title: 'TODO: Add project title',
      description: 'TODO: Add project description',
      tech: ['Python', 'HuggingFace', 'Transformers'],
    },
  },
  {
    id: 'applied-ml',
    name: 'Applied Machine Learning',
    category: 'ml',
    description: 'Practical ML pipelines, feature engineering, model deployment',
    project: {
      title: 'TODO: Add project title',
      description: 'TODO: Add project description',
      tech: ['Python', 'scikit-learn', 'Pandas'],
    },
  },
  {
    id: 'data-mining',
    name: 'Data Mining',
    category: 'data',
    description: 'Pattern discovery, clustering, association rules, anomaly detection',
    project: {
      title: 'TODO: Add project title',
      description: 'TODO: Add project description',
      tech: ['Python', 'NumPy', 'scikit-learn'],
    },
  },
  {
    id: 'dl-cv',
    name: 'Deep Learning for Computer Vision',
    category: 'ml',
    description: 'CNNs, object detection, image segmentation, vision transformers',
    project: {
      title: 'TODO: Add project title',
      description: 'TODO: Add project description',
      tech: ['PyTorch', 'OpenCV', 'CUDA'],
    },
  },
  {
    id: 'gen-ai',
    name: 'Systems for Generative AI',
    category: 'systems',
    description: 'LLM infrastructure, inference optimization, model serving',
    project: {
      title: 'TODO: Add project title',
      description: 'TODO: Add project description',
      tech: ['Python', 'LangChain', 'FastAPI'],
    },
  },
];

export const courseCategories = {
  ml: { label: 'Machine Learning & AI', color: 'text-emerald-400' },
  systems: { label: 'Systems & Cloud', color: 'text-blue-400' },
  data: { label: 'Data & Databases', color: 'text-amber-400' },
  theory: { label: 'Theory & Foundations', color: 'text-purple-400' },
};
