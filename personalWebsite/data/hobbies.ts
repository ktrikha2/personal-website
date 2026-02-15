export interface Hobby {
  id: string;
  name: string;
  icon: string;
  description: string;
  highlight?: string;
}

export const hobbiesData: Hobby[] = [
  {
    id: 'f1',
    name: 'Formula 1',
    icon: '🏎️',
    description:
      'Passionate F1 fan following the technical and strategic side of the sport. The theme of this website is inspired by F1 race control rooms.',
    highlight: 'This site\'s theme is inspired by F1 race control!',
  },
  {
    id: 'tennis',
    name: 'Tennis',
    icon: '🎾',
    description:
      'Enjoy playing tennis recreationally. Great way to stay active and competitive.',
  },
  {
    id: 'golf',
    name: 'Golf',
    icon: '⛳',
    description:
      'Working on improving my golf game. Appreciate the mental and technical aspects of the sport.',
  },
  {
    id: 'music',
    name: 'Music & DJing',
    icon: '🎧',
    description:
      'Love exploring electronic music and DJing. Enjoy the creative process of mixing and discovering new tracks.',
  },
];
