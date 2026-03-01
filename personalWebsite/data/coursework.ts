export interface Course {
  id: string;
  name: string;
  code?: string;
  category: 'ml' | 'systems' | 'data' | 'theory';
  description?: string;
}

export const courseworkData: Course[] = [
  {
    id: 'hcml',
    name: 'Human Centered Machine Learning',
    category: 'ml',
    description: 'Human-AI interaction, explainability, fairness in ML systems',
  },
  {
    id: 'adv-db',
    name: 'Advanced Database Systems',
    category: 'data',
    description: 'Query optimization, distributed databases, transaction processing',
  },
  {
    id: 'cloud',
    name: 'Cloud Computing Applications',
    category: 'systems',
    description: 'Distributed systems, cloud architecture, scalability patterns',
  },
  {
    id: 'nlp',
    name: 'Natural Language Processing',
    category: 'ml',
    description: 'Text processing, transformers, language models, NLU/NLG',
  },
  {
    id: 'applied-ml',
    name: 'Applied Machine Learning',
    category: 'ml',
    description: 'Practical ML pipelines, feature engineering, model deployment',
  },
  {
    id: 'data-mining',
    name: 'Data Mining',
    category: 'data',
    description: 'Pattern discovery, clustering, association rules, anomaly detection',
  },
  {
    id: 'dl-cv',
    name: 'Deep Learning for Computer Vision',
    category: 'ml',
    description: 'CNNs, object detection, image segmentation, vision transformers',
  },
  {
    id: 'gen-ai',
    name: 'Systems for Generative AI',
    category: 'systems',
    description: 'LLM infrastructure, inference optimization, model serving',
  },
  {
    id: 'ai-agents',
    name: 'AI Agents and Generative AI',
    category: 'ml',
    description: 'Multi-agent systems, LLM orchestration, agentic workflows',
  },
];

export const courseCategories = {
  ml: { label: 'Machine Learning & AI', color: 'text-emerald-400' },
  systems: { label: 'Systems & Cloud', color: 'text-blue-400' },
  data: { label: 'Data & Databases', color: 'text-amber-400' },
  theory: { label: 'Theory & Foundations', color: 'text-purple-400' },
};
