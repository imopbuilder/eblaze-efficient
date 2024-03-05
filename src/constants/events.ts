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
    title: 'Ideathon Inspire',
    description: [
      "To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever implementation you prefer.",
    ],
    image: {
      src: 'event-pic.jpeg',
      alt: 'event-name',
    },
    lead: 'K. Anil Kumar',
    guidelines: [
      'Teams must consist of a minimum of 3 members and a maximum of 5 members, fostering collaboration and diverse perspectives.',
      'To ensure seamless participation, every team is required to bring their own laptops equipped with necessary development tools and software.',
      'Once the problem statement is fixed, it remains unchanged throughout the event, allowing teams to be consistent and focus on solutions without interruptions.',
      'Teams will have 24 hours to brainstorm, develop, and present their solutions. Mentors will be available for guidance during this time.',
    ],
    note: [
      'The evaluation criteria are based on the approach taken to tackle the problem statement. Judges will assess the creativity, feasibility, and effectiveness of solutions developed during the event.',
    ],
  },
  {
    id: 'e6',
    title: 'CodeCraft Fusion',
    description: [
      "To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever implementation you prefer.",
    ],
    image: {
      src: 'event-pic.jpeg',
      alt: 'event-name',
    },
    lead: 'Rahul Palamarthi',
    guidelines: [
      'At CodeCraft Fusion, students have the opportunity to participate individually or in team of up to three members, fostering collaboration and creativity.',
      'To ensure smooth participation, every team must bring their own laptops equipped with necessary development tools and software.',
      'In the spirit of fair competition, the use of AI chatbots is strictly prohibited during the event.',
      'Participants may seek hints twice and use Google for concept reference, limited to 10 minutes each time.',
      'Participants will engage in a 3-hour coding challenge where their scores are determined by the complexity and efficiency of their solutions.',
    ],
  },
];
