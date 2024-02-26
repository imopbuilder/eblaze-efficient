export type Event = {
  id: string;
  title: string;
  description: string[];
  image: { src: string; alt: string };
  lead: string;
  guidelines: string[];
  note?: string[];
};

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Event 1',
    description: [
      "To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever implementation you prefer.",
    ],
    image: {
      src: 'event-pic.jpeg',
      alt: 'event-name',
    },
    lead: 'Anil Kumar',
    guidelines: ['Each team should have min of 3 members max of 5 members', 'Each team should have min of 3 members max of 5 members'],
    note: ['The evaluation criteria is based on how you actually approach the problem statement.'],
  },
  {
    id: 'e2',
    title: 'Event 2',
    description: [
      "To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever implementation you prefer.",
    ],
    image: {
      src: 'event-pic.jpeg',
      alt: 'event-name',
    },
    lead: 'Anil Kumar',
    guidelines: ['Each team should have min of 3 members max of 5 members', 'Each team should have min of 3 members max of 5 members'],
  },
  {
    id: 'e3',
    title: 'Event 3',
    description: [
      "To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever implementation you prefer.",
    ],
    image: {
      src: 'event-pic.jpeg',
      alt: 'event-name',
    },
    lead: 'Anil Kumar',
    guidelines: ['Each team should have min of 3 members max of 5 members', 'Each team should have min of 3 members max of 5 members'],
  },
  {
    id: 'e4',
    title: 'Event 4',
    description: [
      "To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever implementation you prefer.",
    ],
    image: {
      src: 'event-pic.jpeg',
      alt: 'event-name',
    },
    lead: 'Anil Kumar',
    guidelines: ['Each team should have min of 3 members max of 5 members', 'Each team should have min of 3 members max of 5 members'],
  },
  {
    id: 'e5',
    title: 'Event 5',
    description: [
      "To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever implementation you prefer.",
    ],
    image: {
      src: 'event-pic.jpeg',
      alt: 'event-name',
    },
    lead: 'Anil Kumar',
    guidelines: ['Each team should have min of 3 members max of 5 members', 'Each team should have min of 3 members max of 5 members'],
  },
];
