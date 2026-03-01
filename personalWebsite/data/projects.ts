export type ProjectSource = 'experience' | 'side';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  source: ProjectSource;
  category: 'side' | 'coursework' | 'research' | 'cloud' | 'systems';
  featured: boolean;
  image?: string;
  problem: string;
  approach: string;
  results?: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  startDate?: string;
  endDate?: string;
  status?: 'wip';
}

export const projectsData: Project[] = [
  {
    id: 'transcripts-pipeline',
    slug: 'transcripts-pipeline',
    title: 'Transcripts Pipeline & NLP Analytics',
    tagline: 'Python ETL pipeline with Airflow on call transcripts; insights in Power BI',
    description:
      'ETL pipeline processing call transcripts with Airflow, enabling NLP-derived insights visualized in Power BI for customer service optimization.',
    source: 'experience',
    category: 'research',
    featured: true,
    problem: 'Large volumes of call transcript data required processing and analysis for actionable insights.',
    approach:
      'Built Python ETL pipeline with Apache Airflow to ingest and process transcripts; integrated NLP analysis using spaCy (NER for product mentions) and NLTK for pattern extraction, sentiment, and call categorization.',
    results:
      'Delivered actionable insights including product mentions via NER, customer intent, call categorization, and sentiment analysis, enabling data-driven virtual agent training and customer service improvements for stakeholders.',
    techStack: ['Python', 'Airflow', 'spaCy', 'NLTK', 'Power BI', 'ETL'],
    links: {},
  },
  {
    id: 'nlp-virtual-agent',
    slug: 'nlp-virtual-agent',
    title: 'NLP Virtual Agent',
    tagline: '10,000+ hours saved annually, 15% call volume reduction',
    description:
      'Deployed NLP virtual agent on Genesys PureCloud as part of ~$2M initiative. Agent answers customer questions about ServiceNow tickets using OpenAI and Gemini, with multi-voice TTS.',
    source: 'experience',
    category: 'research',
    featured: true,
    problem:
      'High call volumes and repetitive ServiceNow ticket inquiries created inefficiency, long wait times, and agent fatigue. Customers needed quick answers about ticket status and common support questions.',
    approach:
      'Integrated OpenAI and Gemini models for natural language understanding and response generation. Deployed multiple TTS engines for voice output; connected to ServiceNow to answer customer questions about tickets. Deployed on Genesys PureCloud.',
    results:
      '10,000+ hours saved annually, 15% reduction in call volume. Customers receive instant answers about ServiceNow tickets via voice, deflecting routine inquiries from live agents.',
    techStack: ['Python', 'TTS engines', 'ServiceNow', 'Genesys PureCloud'],
    links: {},
  },
  {
    id: 'power-apps-clients',
    slug: 'power-apps-clients',
    title: 'Power Apps for Client Workflows',
    tagline: 'Custom inventory app for large food manufacturer integrated with Dynamics 365',
    description:
      'Leveraged Power Apps and Power Automate to build custom applications and automate workflows, including an inventory management app for a large food manufacturer with specialized tools integrated to Dynamics 365. Transformed complex business requirements into actionable documentation and tailored solutions.',
    source: 'experience',
    category: 'side',
    featured: false,
    problem:
      'Clients needed custom applications to streamline operations, but manual processes and disconnected systems were creating inefficiency. A large food manufacturer required inventory management with specialized tools tied into their existing Dynamics 365 ecosystem.',
    approach:
      'Built custom Power Apps and Power Automate solutions to enhance operational efficiency. Delivered an inventory management app integrating specialized tools with Dynamics 365. Transformed complex business requirements into detailed, actionable documentation; conducted UAT sessions and delivered tailored solutions aligned with client objectives.',
    results:
      'Streamlined business processes, enhanced operational efficiency, and maximized client investment through process automation and documentation that aligned solutions with business goals.',
    techStack: ['Power Apps', 'Power Automate', 'Dynamics 365', 'Microsoft Copilot', 'Azure'],
    links: {},
  },
  {
    id: 'weather-impact-analysis',
    slug: 'weather-impact-analysis',
    title: 'Weather Impact Analysis / Forecasting Alarms Model',
    tagline: 'Time series + weather model for network infrastructure alarm forecasting',
    description:
      'Streamlit app combining historic alarm patterns with weather data. Gradient Boost Regression for recurrence likelihood; custom tropospheric ducting model with heatmaps. OpenWeather API integration.',
    source: 'experience',
    category: 'research',
    featured: true,
    problem:
      'Weather and tropospheric ducting impacted communication tower reliability; redundant alarms increased processing load. Teams needed to predict alarm recurrence and understand weather-driven patterns.',
    approach:
      'Built Gradient Boost Regression model on historic alarm patterns to predict recurrence likelihood. Integrated OpenWeather API for weather features. Developed custom scientific model for tropospheric ducting with Python scripts. Streamlit app with heatmaps for visualization and analysis; alarm suppression framework.',
    results:
      'Redundant alarms reduced by 20%, processing time reduced by 10%. Teams gained visibility into weather-alarm relationships and predictive recurrence signals.',
    techStack: ['Python', 'Streamlit', 'scikit-learn', 'Pandas', 'OpenWeather API'],
    links: {},
  },
  {
    id: 'etl-pipeline-modernization',
    slug: 'etl-pipeline-modernization',
    title: 'ETL Pipeline Modernization POC',
    tagline: 'Airflow vs Oracle ODI: cost efficacy of open-source over licensed ETL',
    description:
      'Proof of concept replicating existing Oracle ODI ETL pipelines in Apache Airflow, demonstrating equivalent capability at zero licensing cost and improved flexibility.',
    source: 'experience',
    category: 'cloud',
    featured: false,
    problem:
      'Legacy Oracle ODI workflows carried licensing costs and had limitations in maintainability and flexibility. Leadership needed evidence that a modern, open-source alternative could deliver the same outcomes.',
    approach:
      'Built a POC replicating production ETL pipelines in Apache Airflow. Mapped ODI workflows to Airflow DAGs; demonstrated equivalent data movement and transformation logic. Documented cost comparison: free, open-source Airflow vs. licensed Oracle ODI.',
    results:
      'Validated Airflow as a viable replacement, demonstrating cost efficacy of a free product vs. licensed ODI while maintaining reliability, speed, and improved maintainability.',
    techStack: ['Python', 'Airflow', 'ETL', 'SQL'],
    links: {},
  },
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    title: 'QR Code Generator Service',
    tagline: 'Java Spring Boot microservice saving marketing team $5K/year',
    description:
      'Java Spring Boot microservice for QR code generation, replacing a costly third-party solution. Acted as PM over 3 team members, handling all development and deployment. Integrated Adobe Analytics tracking.',
    source: 'experience',
    category: 'systems',
    featured: false,
    problem:
      'Marketing relied on a third-party QR code service that was costly and created vendor dependency. The team needed an in-house solution with tracking capabilities.',
    approach:
      'Acted as project manager over 3 team members, owning all development and deployment. Built Java Spring Boot microservice for QR code generation; integrated Adobe Analytics for tracking scan events and campaign performance.',
    results:
      'Saved marketing team $5K/year by eliminating third-party licensing. Delivered improved reliability, customization, and analytics visibility for campaign measurement.',
    techStack: ['Java', 'Spring Boot', 'Adobe Analytics', 'REST API', 'Azure'],
    links: {},
  },
  {
    id: 'deep-learning-cv-project',
    slug: 'deep-learning-cv-project',
    title: 'Swin Transformer for Image Recognition',
    tagline: 'CS444 Deep Learning final project: hierarchical vision transformers',
    description:
      'Full ML pipeline for training and evaluating Swin Transformers on image recognition. Data loading, distributed training on HPC (Slurm), and performance evaluation. Accompanied by a written report.',
    source: 'side',
    category: 'coursework',
    featured: false,
    problem:
      'CS444 final project required implementing a state-of-the-art vision model and running the full pipeline from data ingestion to evaluation.',
    approach:
      'Implemented Swin Transformer, a hierarchical vision transformer for image recognition. Built data loaders and config system; trained on HPC cluster via Slurm. Evaluated model performance with dedicated evaluation scripts. Full pipeline: data loading, model configuration, distributed training, and evaluation.',
    results:
      'Delivered a complete deep learning implementation with trained model and evaluation results. Paper documents methodology and findings.',
    techStack: ['PyTorch', 'Python', 'Swin Transformer', 'Slurm'],
    links: {
      github: 'https://github.com/ktrikha2/cs444-final',
      paper: 'https://github.com/ktrikha2/cs444-final/blob/main/CS444_Final_Report.pdf',
    },
  },
  {
    id: 'hci-multi-agent-llm',
    slug: 'hci-multi-agent-llm',
    title: 'User Perceptions and Design Guidelines for Multi-Agent LLM Interfaces',
    tagline: 'CS568 HCI: Trust and mental models in multi-agent AI interfaces',
    description:
      'Study on how interface design affects user trust in systems with multiple AI agents. Compared four layouts (Siloed, Sequential, Chat-based, Dashboard) with N=11 participants to identify factors for successful human-agent collaboration.',
    source: 'side',
    category: 'coursework',
    featured: false,
    problem:
      'Multi-agent LLM systems lack clear design guidelines. Opaque "black box" processes and ambiguous agent roles lead to cognitive overload and rapid loss of trust.',
    approach:
      'Conducted a study comparing four interface layouts (Siloed, Sequential, Chat-based, and Dashboard). Evaluated user trust, mental models, and preference. Identified design drivers: transparency of coordination, role clarity, real-time feedback, and user oversight.',
    results:
      'Dashboard and Chat-based designs were most effective. Dashboard excelled in transparency and trust; Chat was favored for familiarity. Design recommendations: visualize coordination (progress bars, flow indicators), explicit role labels, real-time status updates, and control points for user review.',
    techStack: ['HCI', 'User Study', 'Research', 'Multi-Agent Systems'],
    links: {
      github: 'https://github.com/ktrikha2/568-hci',
      paper: 'https://github.com/ktrikha2/568-hci/blob/main/CS568_Final_Report.pdf',
    },
  },
  {
    id: 'flexilearn',
    slug: 'flexilearn',
    title: 'FlexiLearn',
    tagline: 'AI-powered study platform with dynamic flashcards and interactive quizzes',
    description:
      'AI-powered study platform that generates flashcards from PDFs via OpenAI, offers multiple unique definitions per term for deeper learning, and includes interactive quizzes with text-to-speech and progress tracking.',
    source: 'side',
    category: 'research',
    featured: false,
    problem:
      'Traditional flashcards provide one definition per term, leading to rote memorization and surface-level learning. Students need diverse perspectives on complex topics to improve retention.',
    approach:
      'Built FlexiLearn using the OpenAI API to extract key terms and definitions from uploaded PDFs. Implemented dynamic learning by generating multiple unique definitions and phrases per term to prevent rote memorization. Added interactive quizzes with text-to-speech for auditory learners, progress tracking (correct/incorrect, time taken), and manual customization so users can create, edit, or remove terms from study sets.',
    results:
      'Users can upload PDFs to auto-generate study sets, customize content manually, and test knowledge through quizzes with diverse definitions and TTS support—providing a more effective way to study through varied perspectives rather than repetitive flashcards.',
    techStack: ['OpenAI API', 'React', 'Text-to-Speech', 'JavaScript'],
    links: {
      demo: 'https://www.youtube.com/watch?v=jBO3BvbbfeM',
    },
  },
  {
    id: 'ehr-rag-pipeline',
    slug: 'ehr-rag-pipeline',
    title: 'EHR RAG Pipeline',
    tagline: 'Graph RAG for admission notes with PostgreSQL vector search',
    description:
      'Graph RAG demo that processes unstructured patient admission note PDFs. Uses Unstructured.io for extraction, BERT for chunking and embeddings, PostgreSQL with pgvector for the vector store, and a Streamlit UI for nurses to search and export discharge documents.',
    source: 'side',
    category: 'research',
    featured: false,
    status: 'wip',
    problem:
      'Nurses need to quickly find and consolidate patient information from multiple admission notes when preparing discharge documents. Unstructured PDFs make this manual and time-consuming.',
    approach:
      'Built a Graph RAG pipeline: Unstructured.io for PDF parsing and structured extraction (demographics, vitals, diagnoses, medications, allergies, procedures). BERT for semantic chunking and embeddings. PostgreSQL with pgvector as the vector database for retrieval. Streamlit dashboard for search and filtering across documents. Export to JSON or formatted discharge documents.',
    techStack: ['Python', 'Graph RAG', 'PostgreSQL', 'pgvector', 'BERT', 'Streamlit'],
    links: {},
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
