import { IoTDesignHeading, RpsDesignHeading, TransformerDesignHeading } from '@/components/pages/events/guidelines';
import { ReactNode } from 'react';

export type Event = {
  id: string;
  title: string;
  description: ReactNode[];
  image: { src: string; alt: string };
  lead: string;
  guidelines: string[];
  note?: string[];
};

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Circuit Design',
    description: [
      RpsDesignHeading,
      "Join Eblaze for an immersive Regulated Power Supply (RPS) workshop where participants receive all essential components to construct their RPS circuit. Under the expert guidance of our RPS circuit designing team, you'll receive comprehensive support to ensure successful assembly of your RPS system. Unlock this opportunity to learn, create, and master the intricacies of regulated power supply with Eblaze!",
      TransformerDesignHeading,
      'Join Eblaze for a hands-on Transformer Design workshop where participants get expert guidance to practically design transformers. Engage in tasks like winding, soldering, and assembling laminations, gaining comprehensive experience in transformer design under expert supervision.',
      IoTDesignHeading,
      "Join us at Eblaze for the IoT Design Workshop! Our expert team will teach you the fundamentals of Arduino boards and multi-functional shields, empowering you to create innovative IoT projects. Whether you're a beginner or an enthusiast, this workshop offers a hands-on experience to explore the endless possibilities of IoT technology. Unlock new opportunity to learn, innovate, and unleash your creativity in the world of IoT design!",
    ],
    image: {
      src: 'circuit-design.jpeg',
      alt: 'circuit-design-pic',
    },
    lead: 'Momidi Chakri',
    guidelines: ['Each team should have min of 3 members max of 5 members', 'Each team should have min of 3 members max of 5 members'],
  },
  {
    id: 'e2',
    title: 'Project Expo',
    description: [
      "To illustrate this animation, I'll go step by step, animating a paragraph on scroll first, then moving to a word by word animation and then doing a character by character animation. Depending on your taste (I like the word by word the best), you can choose whichever implementation you prefer.",
    ],
    image: {
      src: 'event-pic.jpeg',
      alt: 'event-name',
    },
    lead: 'P. Sai Ganesh Naik',
    guidelines: ['Each team should have min of 3 members max of 5 members', 'Each team should have min of 3 members max of 5 members'],
  },
  {
    id: 'e3',
    title: 'Show Your Talent',
    description: [
      `Calling all talented students! Are you ready to showcase your extraordinary skills and passions? Whether you excel in art, singing, dance, project development, paper crafts, or any other talent, this is your moment to shine! Join us at our upcoming "Show Your Talent" event, where you can unleash your creativity, captivate the audience, and inspire others with your unique abilities. Don't miss this chance to make your mark and celebrate the diversity of talent within our community!`,
    ],
    image: {
      src: 'show-your-talent.jpeg',
      alt: 'show-your-talent-pic',
    },
    lead: 'Hemanth Kumar',
    guidelines: [
      'Showcase your talent effectively within a video or photo lasting between 15 to 20 seconds. Make every moment count as you captivate the audience with your skills!',
      "The deadline for submitting your entry is March 12. Don't miss this opportunity to share your talent with the world.",
      "To cover event expenses and ensure its success, there's an entry fee of 50/- per participant.",
      'Let your talent shine without crossing any boundaries. Ensure that your video or photo content does not include any depictions of violence, abuse, politics, or spirituality.',
    ],
  },
  {
    id: 'e4',
    title: 'Hunt the Components',
    description: [
      'Embark on a journey of innovation with our Hunt the Components challenge! Calling all problem solvers and tech enthusiasts to participate in this exhilarating experience. Engage in a unique challenge hunt within real-world labs, where teams will decipher intricate tech-based challenges spanning various aspects of circuit design.',
    ],
    image: {
      src: 'hunt-the-components.jpeg',
      alt: 'hunt-the-components-pic',
    },
    lead: 'G. Jayasimha',
    guidelines: [
      'To ensure fair play and focus, the use of mobile phones is strictly prohibited during the challenge.',
      'Once registration is completed, team members cannot be changed. This fosters team cohesion and ensures a level playing field for all participants.',
      'Teams must consist of a minimum of 3 and a maximum of 5 members, encouraging collaboration and diversity of skills.',
      'For added convenience and flexibility, spot registrations are available for teams looking to join the challenge on the day of the event.',
      'Only 30 teams will be allowed to participate, so register early to avoid missing out on this thrilling adventure.',
    ],
    note: [
      'Each correct solution not only unlocks the next challenge but also paves the way for deeper exploration.',
      'The team with the most solved quest within the time limit wins the ultimate accolade!',
    ],
  },
  {
    id: 'e5',
    title: 'Ideathon Inspire',
    description: [
      "Ideathons are dynamic, intensive workshops that ignite creativity, innovation, and  problem-solving skills among students. These events provide a platform for aspiring developers, designers, and tech enthusiasts to collaborate, turning their ideas into tangible solutions. Participants pitch innovative ideas, form teams, prototype, and receive mentorship. It's an opportunity to apply classroom knowledge, gain hands-on experience, and network with like-minded individuals.",
    ],
    image: {
      src: 'ideathon-inspire.jpeg',
      alt: 'ideathon-inspire-pic',
    },
    lead: 'K. Anil Kumar 👻',
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
    title: 'Circuit Mania',
    description: [
      "Welcome to Circuit Mania: where aptitude meets electrical and electronics engineering! Get ready to test your mental agility and engineering knowledge in this dynamic quiz competition. From circuit analysis to digital electronics, every question is crafted to challenge your problem-solving skills and understanding of fundamental concepts. Whether you're a seasoned engineer or just starting your journey, E-Quiz offers an exciting opportunity to compete, learn, and emerge victorious.",
    ],
    image: {
      src: 'circuit-mania.jpeg',
      alt: 'circuit-mania-pic',
    },
    lead: 'Peesa Anvesh',
    guidelines: [
      'Teams must consist of 3 to 5 members. Form a diverse team to leverage a variety of skills and knowledge.',
      'Each team should bring at least one laptop to access the quiz platform and participate effectively.',
      'To maintain the integrity of the quiz, the use of mobile phones is strictly prohibited during the quiz session. Teams are expected to rely solely on their collective knowledge and resources.',
      'Prepare to test your aptitude and delve into the basics of electrical and electronics engineering. Quiz questions will cover a wide range of topics within these domains,',
    ],
  },
  {
    id: 'e7',
    title: 'CodeCraft Fusion',
    description: [
      "At CodeCraft Fusion, participants will face a series of challenging coding problems that will put their skills to the ultimate test. Whether you're a seasoned coder or just starting out, this event offers an exciting platform to hone your abilities and compete against fellow enthusiasts.",
      'Solve coding challenges within a time limit, strategize your approach, and unleash your creativity to craft elegant solutions. From algorithmic puzzles to real-world programming tasks, CodeCraft Fusion will push you to think critically and innovate under pressure.',
    ],
    image: {
      src: 'codecraft-fusion.jpeg',
      alt: 'codecraft-fusion-pic',
    },
    lead: 'Rahul Palamarthi 😜',
    guidelines: [
      'At CodeCraft Fusion, students have the opportunity to participate individually or in team of up to three members, fostering collaboration and creativity.',
      'To ensure smooth participation, every team must bring their own laptops equipped with necessary development tools and software.',
      'In the spirit of fair competition, the use of AI chatbots is strictly prohibited during the event.',
      'Participants may seek hints twice and use Google for concept reference, limited to 10 minutes each time.',
      'Participants will engage in a 3-hour coding challenge where their scores are determined by the complexity and efficiency of their solutions.',
    ],
  },
  {
    id: 'e8',
    title: 'Know Your Branch',
    description: [
      'Welcome to one of the most anticipated events of the fest - "Know Your Branch"! This event is specifically curated for students in the Electrical and Electronics Engineering (EEE) branch. We are thrilled to invite esteemed alumni of SVU EEE who have established themselves in diverse domains. They will grace us with their presence and engage in insightful one-on-one interactions with students, offering invaluable knowledge and sharing their rich experiences.',
      'Engage actively with the alumni to maximize your learning and networking opportunities and get ready to gain profound insights, network with industry experts, and explore the myriad opportunities awaiting you in the field of Electrical and Electronics Engineering!',
    ],
    image: {
      src: 'know-your-branch.jpeg',
      alt: 'know-your-branch-pic',
    },
    lead: 'K. Anil Kumar 👻',
    guidelines: ['To make the most of this event, come prepared with questions about career paths, industry trends, and personal experiences.'],
  },
];
