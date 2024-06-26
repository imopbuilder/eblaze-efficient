import {
  FunActivityFour,
  FunActivityOne,
  FunActivityThree,
  FunActivityTwo,
  IoTDesignHeading,
  RpsDesignHeading,
  ShowYourTalentWhatsappLink,
  TransformerDesignHeading,
} from '@/components/pages/events/guidelines';
import { ReactNode } from 'react';

export type Event = {
  id: string;
  title: string;
  description: ReactNode[];
  image: { src: string; alt: string };
  lead: string;
  guidelines: ReactNode[];
  note?: string[];
};

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Circuit Design',
    description: [
      RpsDesignHeading,
      "Join Eblaze for an immersive Regulated Power Supply (RPS) workshop where participants receive all essential components to construct their RPS circuit. Under the expert guidance of our RPS circuit designing team, you'll receive comprehensive support to ensure successful assembly of your RPS system. Unlock this opportunity to learn, create, and master the intricacies of regulated power supply with Eblaze!",
      'Introducing our latest innovation: the cost-effective RPS (Regulated Power Supply) circuit board with voltage ratings ranging from 0 to 25 volts. Experience reliable power control without breaking the bank!',
      TransformerDesignHeading,
      'Join Eblaze for a hands-on Transformer Design workshop where participants get expert guidance to practically design transformers. Engage in tasks like winding, soldering, and assembling laminations, gaining comprehensive experience in transformer design under expert supervision.',
      IoTDesignHeading,
      "Join us at Eblaze for the IoT Design Workshop! Our expert team will teach you the fundamentals of Arduino boards and multi-functional shields, empowering you to create innovative IoT projects. Whether you're a beginner or an enthusiast, this workshop offers a hands-on experience to explore the endless possibilities of IoT technology. Unlock new opportunity to learn, innovate, and unleash your creativity in the world of IoT design!",
    ],
    image: {
      src: 'circuit-design.jpeg',
      alt: 'circuit-design-pic',
    },
    lead: 'Momidi Chakri and Vikas',
    guidelines: [
      'The event comprises five distinct tracks, each focusing on different aspects of technology: RPS design, Transformer design, IoT design, RPS and IoT design, and Transformer and IoT design.',
      'Participants have the flexibility to choose between tracks with or without design kits, catering to varying preferences and levels of expertise.',
      'Please note that spot registrations will not be accepted. Be sure to register in advance to secure your spot in the event.',
    ],
    note: [
      'Participants with the best designs in each track stand a chance to win exciting cash prizes. So bring your A-game and showcase your creativity and skills for a chance to be rewarded!',
      'For IoT Design, kindly bring your personal laptop to the workshop',
    ],
  },
  {
    id: 'e2',
    title: 'Project Expo',
    description: [
      "Eblaze transcends the boundaries of a typical college fest, standing as a beacon of innovation, knowledge exchange, and collaborative spirit. This event aims to foster and showcase students' project-making skills, providing a platform for them to translate theoretical concepts into real-time projects.",
      'Participants are encouraged to explore a diverse array of projects across various domains, offering a rich tapestry of innovation and creativity. Join us at Eblaze and witness the culmination of ingenuity, as students bring their projects to life, inspire, and educate through hands-on experiences.',
    ],
    image: {
      src: 'project-expo.jpeg',
      alt: 'project-expo-pic',
    },
    lead: 'Sai Ganesh and Jessica',
    guidelines: [
      'Participants can also present their projects in their interested domain and rewards will be given for the best projects.',
      'The event will span over two days, providing ample time for participants to explore and engage with the projects.',
      'The projects will be accessible to students at any point during the event. Feel free to explore and interact with the projects at your convenience throughout the duration of the event.',
    ],
    note: [
      'Winners will receive cash prizes as follows, 1st place: Rs. 3000, 2nd place: Rs. 2000, 3nd place: Rs. 1000',
      'Participants should make their projects precedently.',
    ],
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
      'Video/Photo Duration: Your video or photo should be between 15 to 20 seconds.',
      'Submission Deadline: Please submit your entry on or before March 16.',
      'Content Restrictions: Ensure that your video does not include any content related to violence, abuse, politics, or spirituality.',
      'Participants are required to submit their full name, college/university name, branch of study, contact phone number, and a brief description of their talent via direct message (DM) to our official Eblaze Instagram page.',
      ShowYourTalentWhatsappLink,
    ],
    note: ['Winners will receive cash prizes as follows, 1st place: Rs. 1500, 2nd place: Rs. 1000'],
  },
  {
    id: 'e4',
    title: 'Tech Hunt',
    description: [
      'Embark on a journey of innovation with our Tech Hunt challenge! Calling all problem solvers and tech enthusiasts to participate in this exhilarating experience. Engage in a unique challenge hunt within real-world labs, where teams will decipher intricate tech-based challenges spanning various aspects of circuit design.',
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
      'Spot registrations are available at the venue for a nominal fee of ₹100 per participant.',
      'Only 30 teams will be allowed to participate, so register early to avoid missing out on this thrilling adventure.',
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
      'At all times, without exception, at least one team member must be physically present at the ideathon venue (the designated location).',
      'Spot registrations are available at the venue for for a nominal fee of ₹100 per participant.',
    ],
    note: [
      'On March 18th, at 9:30Am, the problem statements will be released.',
      'The evaluation criteria is based on how you actually approach the problem statement. Mentoring and jury will be done by startup CEOs',
    ],
  },
  {
    id: 'e6',
    title: 'Circuit Mania',
    description: [
      'Welcome to Circuit Mania: where logic intertwines with wires and currents! Prepare yourself for an electrifying journey through two rounds of network puzzles and breadboard design challenges. Engage your mind in this thrilling quiz competition, where every question is meticulously designed to push the boundaries of your electrical and electronics engineering knowledge.',
      "Whether you're a seasoned engineer or a novice enthusiast, Circuit Mania offers an exhilarating platform to put your skills to the test, learn, and triumph over challenges. Join us and let the sparks fly as you navigate through the circuits of innovation and creativity!",
    ],
    image: {
      src: 'circuit-mania.png',
      alt: 'circuit-mania-pic',
    },
    lead: 'P. Hemanth and Haneesha',
    guidelines: [
      'Candidates should participate individually.',
      'Quiz: Participants will be provided with paper-based quiz sheets for both rounds.',
      'Round 1 presents Paper-Pen Network Puzzles, Solve network puzzles with pen and paper, Utilize critical thinking skills',
      'Round 2 presents Breadboard Design along with Design of simple circuits.',
      'Knowledge Base: Prepare across electrical and electronics engineering domains.',
      'Spot registrations are available at the venue for a nominal fee of ₹100 per participant.',
      'Uphold honesty and fairness, cheating leads to disqualification.',
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
      'Participants can compete individually or in teams, allowing for both collaborative and individual problem-solving approaches.',
      'Teams can consist of a minimum of 1 member and a maximum of 3 members, promoting teamwork while accommodating individual participation.',
      'The event encompasses three main tracks: Data Structures and Algorithms (DSA), Web Development, and UI/UX Design with Figma. This diverse range of tracks ensures that participants with different skill sets and interests can find a suitable challenge.',
      'For DSA, participants will tackle 2 intermediate-level problems and 1 easy-level problem.',
      'Web development tasks include creating a Hero section and a functional task.',
      'UI/UX Design tasks involve crafting a landing page along with a project statement.',
      'Spot registrations are available at the venue for a nominal fee of ₹100 per participant.',
    ],
    note: [
      'The top performer in each track will receive a cash prize of Rs. 2000 during the CodeCraft Fusion event.',
      'Kindly bring your personal laptop to the workshop',
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
    guidelines: [
      'To make the most of this event, come prepared with questions about career paths, industry trends, and personal experiences.',
      'All candidates registered for the workshop are cordially invited to participate in this event.',
    ],
  },
  {
    id: 'e9',
    title: 'Paper Presentation',
    description: [
      'Eblaze presents an exciting opportunity for researchers, scholars, and enthusiasts to showcase their innovative ideas and cutting-edge research in the field of electronics and electrical engineering through the Paper Presentation event. Participants are invited to present their papers on topics ranging from emerging technologies to novel research findings, providing a platform for sharing knowledge and fostering intellectual discourse.',
      "Whether you're a seasoned researcher or a budding scholar, Paper Presentation at Eblaze is your chance to shine and contribute to the advancement of the field.",
    ],
    image: {
      src: 'paper-presentation.jpeg',
      alt: 'paper-presentation-pic',
    },
    lead: 'Shiva Kumar',
    guidelines: [
      'Participants can choose to present their research in either of the two tracks: Paper (Chart) or PPT Presentation, allowing flexibility in presentation format.',
      'Participation in the Paper Presentation event is open to individuals, providing a platform for researchers and scholars to showcase their work independently.',
      'Topics: EV technology, solar panels, AI applications, nanotechnology in electronics, and microgrid-based power system reliability enhancement.',
    ],
    note: [
      'Cash prizes and certificates will be awarded to the top presenters in each track, with the amount varying depending on the contest. The prize distribution will be announced during the event.',
    ],
  },
  {
    id: 'e10',
    title: 'Fun Activities',
    description: [
      "Gather your friends for an eve of excitement and laughter! Challenge each other with different activities. Whether you're racing against the clock in quick challenges or showcasing your creativity with drawing and guessing games, there's boundless fun to be had. So, rally your team, unleash your competitive spirit, and let the good times roll!",
      FunActivityOne,
      "Step right up and witness the magic of static electricity in action! Our Vande Graaff generator is not just for sparking curiosity - it's also a hair straightening sensation. With its powerful charge accumulation capabilities, the generator creates an electric field that can temporarily align and straighten hair follicles, resulting in a sleek and smooth hairstyle.",
      FunActivityTwo,
      "Get ready to indulge your appetite and test your mettle in the ultimate culinary showdown - the Eblaze Fastest Food Eating Challenge! Whether you're a seasoned competitive eater or just looking to satisfy your hunger for excitement, this adrenaline-fueled event promises thrills, spills, and plenty of delicious delights.",
      FunActivityThree,
      "The Eblaze Buzz Wire Challenge is a classic game of skill and dexterity that puts your hand-eye coordination to the test. Participants will face a series of electrifying obstacles as they attempt to guide a metal loop along a twisted wire without making contact and triggering the buzzer. It's a race against time and trembling fingers as players strive to complete the course without setting off the alarm.",
      FunActivityFour,
      'The Disposal Paper Cup Games are a series of thrilling activities that challenge participants to think outside the box and make the most of everyday materials. From simple stacking challenges to elaborate obstacle courses, each game is designed to showcase the versatility and ingenuity of the humble paper cup.',
    ],
    image: {
      src: 'fun-activities.jpeg',
      alt: 'fun-activities-pic',
    },
    lead: 'Sruthi',
    guidelines: [
      'Fun events are accessible through out the entire event for 2 days.',
      'Different kinds of games are available and the candidates can participate based on their interest.',
      'This is completely free of cost and is only for fun.',
    ],
    note: ['Winners will be awarded with exciting gifts.'],
  },
];

export type EventSchedule = {
  name: string;
  date: number;
  month: string;
  day: string;
  time: string;
};

export const EVENT_SCHEDULE: EventSchedule[] = [
  {
    name: 'Inauguration',
    date: 18,
    month: 'March',
    day: 'Monday',
    time: '9:00 AM to 10:00 AM',
  },
  {
    name: 'Circuit Designing',
    date: 18,
    month: 'March',
    day: 'Monday',
    time: '10:00 AM to 1:00 PM',
  },
  {
    name: 'Ideathon Inspire',
    date: 18,
    month: 'March',
    day: 'Monday',
    time: '10:00 AM to 5:00 PM',
  },
  {
    name: 'Lunch Break',
    date: 18,
    month: 'March',
    day: 'Monday',
    time: '1:00 PM to 2:00 PM',
  },
  {
    name: 'Project Expo',
    date: 18,
    month: 'March',
    day: 'Monday',
    time: '2:00 PM to 3:00 PM',
  },
  {
    name: 'Circuit Mania',
    date: 18,
    month: 'March',
    day: 'Monday',
    time: '3:00 PM to 4:00 PM',
  },
  {
    name: 'Tech Hunt',
    date: 18,
    month: 'March',
    day: 'Monday',
    time: '4:00 PM to 5:30 PM',
  },
  {
    name: 'Ideathon Inspire',
    date: 19,
    month: 'March',
    day: 'Tuesday',
    time: '9:00 AM to 10:00 AM',
  },
  {
    name: 'Circuit Designing',
    date: 19,
    month: 'March',
    day: 'Tuesday',
    time: '9:00 AM to 12:00 PM',
  },
  {
    name: 'Lunch Break',
    date: 19,
    month: 'March',
    day: 'Tuesday',
    time: '12:00 PM to 1:00 PM',
  },
  {
    name: 'Fun Activities',
    date: 19,
    month: 'March',
    day: 'Tuesday',
    time: '1:00 PM to 2:00 PM',
  },
  {
    name: 'CodeCraft Fusion',
    date: 19,
    month: 'March',
    day: 'Tuesday',
    time: '1:00 PM to 4:00 PM',
  },
  {
    name: 'Paper presentation',
    date: 19,
    month: 'March',
    day: 'Tuesday',
    time: '2:00 PM to 4:00 PM',
  },
  {
    name: 'Show Your talent',
    date: 19,
    month: 'March',
    day: 'Tuesday',
    time: '4:00 PM to 4:30 PM',
  },
  {
    name: 'Valedictory',
    date: 19,
    month: 'March',
    day: 'Tuesday',
    time: '4:30 PM to 5:30 PM',
  },
];
