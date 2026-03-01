export interface Hobby {
  id: string;
  name: string;
  icon: string;
  description: string;
  image?: string; // optional: path to photo (e.g. /images/hobbies/f1.jpg)
}

export const hobbiesData: Hobby[] = [
  {
    id: 'f1',
    name: 'Formula 1',
    icon: '🏎️',
    description:
      'I follow F1 pretty closely as a fan of McLaren. Love the chaos and strategy, as well as all the locations worldwide.',
    image: '/images/hobbies/f1.jpg',
  },
  {
    id: 'tennis',
    name: 'Tennis',
    icon: '🎾',
    description:
      'Played competitive tennis in high school and club in college. Still try to get on the court whenever I can.',
    image: '/images/hobbies/tennis.jpg',
  },
  {
    id: 'golf',
    name: 'Golf',
    icon: '⛳',
    description: 'Love getting out on the course whenever possible. The views are always stunning.',
    image: '/images/hobbies/golf.jpg',
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎧',
    description:
      'Love discovering new tracks from all genres. I even took a DJing course! Let me know if you need a DJ!',
    image: '/images/hobbies/music.jpg',
  },
];
