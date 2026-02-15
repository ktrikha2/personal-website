export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
  color: string;
}

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    description: 'Programming languages I work with regularly',
    skills: ['Python', 'C', 'C++', 'SQL', 'Java', 'R', 'TypeScript', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ml-data',
    name: 'ML & Data',
    description: 'Machine learning frameworks and data tools',
    skills: [
      'PyTorch',
      'Transformers',
      'spaCy',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'Power BI',
      'HuggingFace',
      'OpenCV',
      'LangChain',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'databases-web',
    name: 'Databases & Web',
    description: 'Database systems and web frameworks',
    skills: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Hadoop',
      'Flask',
      'FastAPI',
      'Streamlit',
      'Power Apps',
      'Next.js',
      'React',
    ],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'cloud-tools',
    name: 'Cloud & Tools',
    description: 'Cloud platforms and DevOps tools',
    skills: [
      'AWS',
      'Azure',
      'Spark',
      'Airflow',
      'Kafka',
      'Docker',
      'Kubernetes',
      'ETL',
      'REST APIs',
      'Git',
      'CI/CD',
    ],
    color: 'from-purple-500 to-pink-500',
  },
];

// Flat list of all skills for search/filter
export const allSkills = skillsData.flatMap((category) => category.skills);
