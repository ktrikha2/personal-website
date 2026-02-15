export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  track?: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  highlights?: string[];
}

export const educationData: Education[] = [
  {
    id: 'uiuc-ms',
    institution: 'University of Illinois Urbana-Champaign',
    degree: 'Master of Science',
    field: 'Computer Science',
    track: 'AI Track',
    location: 'Champaign, IL',
    startDate: 'Aug 2024',
    endDate: 'May 2026 (Expected)',
    gpa: '4.00',
    highlights: [
      'Focus on Machine Learning, NLP, and AI Systems',
      'Research in Generative AI and Large Language Models',
    ],
  },
  {
    id: 'uiuc-bs',
    institution: 'University of Illinois Urbana-Champaign',
    degree: 'Bachelor of Science',
    field: 'Computer Science & Economics',
    location: 'Champaign, IL',
    startDate: 'Aug 2021',
    endDate: 'Dec 2024',
    gpa: '3.86',
    highlights: [
      'Minor in Business',
      'Dean\'s List multiple semesters',
    ],
  },
];
