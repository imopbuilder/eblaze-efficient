export const REGISTRATION = {
  guidelines: [
    'Please ensure that you carefully review the guidelines provided for our events.',
    'Upon successful completion of the payment process, an invoice will be promptly sent to the email address you provided. This invoice serves as a crucial document(digital/soft copy) for verifying your candidacy throughout the event.',
  ],
};

export type EventRegistration = {
  id: string;
  pack: 'COMBO_PACK' | 'STANDALONE_PACK';
  name: string;
  description: string;
  price: number;
  categories: {
    id: string;
    name: string;
    description: string;
    kits: {
      name: string;
      price: number;
    }[];
  }[];
};

export const COMBO_PACK_REGISTRATIONS: EventRegistration[] = [
  {
    id: 'cpr-1',
    pack: 'COMBO_PACK',
    name: 'RPS Design',
    description: 'Access to all workshop events and RPS design',
    price: 300,
    categories: [
      {
        id: 'cpr-1-a',
        name: 'RPS Design kit',
        description: 'With RPS Design kit',
        kits: [
          {
            name: 'RPS Design kit',
            price: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'cpr-2',
    pack: 'COMBO_PACK',
    name: 'Transformer Design',
    description: 'Access to all workshop events and Transformer design',
    price: 300,
    categories: [
      {
        id: 'cpr-2-a',
        name: 'Transformer Design kit',
        description: 'With Transformer Design kit',
        kits: [
          {
            name: 'Transformer Design kit',
            price: 200,
          },
        ],
      },
      {
        id: 'cpr-2-b',
        name: 'Transformer Design kit',
        description: 'Without Transformer Design kit',
        kits: [],
      },
    ],
  },
  {
    id: 'cpr-3',
    pack: 'COMBO_PACK',
    name: 'IoT Design',
    description: 'Access to all workshop events and IoT design',
    price: 300,
    categories: [
      {
        id: 'cpr-3-a',
        name: 'IoT Design kit',
        description: 'With IoT Design kit',
        kits: [
          {
            name: 'IoT Design kit',
            price: 500,
          },
        ],
      },
      {
        id: 'cpr-3-b',
        name: 'IoT Design kit',
        description: 'Without IoT Design kit',
        kits: [],
      },
    ],
  },
  {
    id: 'cpr-4',
    pack: 'COMBO_PACK',
    name: 'RPS and IoT Design',
    description: 'Access to all workshop events, RPS and IoT design',
    price: 400,
    categories: [
      {
        id: 'cpr-4-a',
        name: 'RPS and IoT Design',
        description: 'With RPS and IoT Design kit',
        kits: [
          {
            name: 'RPS Design kit',
            price: 0,
          },
          {
            name: 'IoT Design kit',
            price: 500,
          },
        ],
      },
      {
        id: 'cpr-4-b',
        name: 'RPS and IoT Design',
        description: 'With RPS and without IoT Design kit',
        kits: [
          {
            name: 'RPS Design kit',
            price: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'cpr-5',
    pack: 'COMBO_PACK',
    name: 'Transformer and IoT Design',
    description: 'Access to all workshop events, Transformer and IoT design',
    price: 400,
    categories: [
      {
        id: 'cpr-5-a',
        name: 'Transformer and IoT Design kit',
        description: 'With Transformer and IoT Design kit',
        kits: [
          {
            name: 'Transformer Design kit',
            price: 200,
          },
          {
            name: 'IoT Design kit',
            price: 500,
          },
        ],
      },
      {
        id: 'cpr-5-b',
        name: 'Transformer and IoT Design kit',
        description: 'With Transformer and without IoT Design kit',
        kits: [
          {
            name: 'Transformer Design kit',
            price: 200,
          },
        ],
      },
      {
        id: 'cpr-5-c',
        name: 'Transformer and IoT Design kit',
        description: 'Without Transformer and with IoT Design kit',
        kits: [
          {
            name: 'IoT Design kit',
            price: 500,
          },
        ],
      },
      {
        id: 'cpr-5-d',
        name: 'Transformer and IoT Design kit',
        description: 'Without Transformer and IoT Design kit',
        kits: [],
      },
    ],
  },
];

// export const COMBO_PACK_REGISTRATIONS: EventRegistration[] = [
//   {
//     id: 'cpr1',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  RPS Design',
//     description: 'Access to all events and RPS Design',
//     metadata: {
//       product: 'workshop_rps_design',
//     },
//     price: 300,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'RPS Design kit',
//         status: true,
//       },
//     ],
//   },
//   {
//     id: 'cpr-logo',
//     category: 'COMBO_PACK',
//     eventName: 'Eblaze Logo',
//     description: 'Eblaze Combo Packs',
//     metadata: {
//       product: 'logo',
//     },
//     price: 0,
//     image: {
//       src: '/images/ui/app/logo.png',
//       alt: 'logo',
//     },
//     kits: [
//       {
//         name: 'RPS kit',
//         status: true,
//       },
//     ],
//   },
//   {
//     id: 'cpr2',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  Transformer Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     metadata: {
//       product: 'workshop_transformer_design',
//     },
//     price: 300,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'Transformer Design kit',
//         status: false,
//       },
//     ],
//   },
//   {
//     id: 'cpr3',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  Transformer Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     metadata: {
//       product: 'workshop_transformer_design',
//     },
//     price: 500,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'Transformer Design kit',
//         status: true,
//       },
//     ],
//   },
//   {
//     id: 'cpr4',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  IoT Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     price: 300,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'IoT Design kit',
//         status: false,
//       },
//     ],
//   },
//   {
//     id: 'cpr5',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  IoT Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     price: 800,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'IoT Design kit',
//         status: true,
//       },
//     ],
//   },
//   {
//     id: 'cpr6',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  RPS and IoT Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     price: 400,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'RPS Design kit',
//         status: true,
//       },
//       {
//         name: 'IoT Design kit',
//         status: false,
//       },
//     ],
//   },
//   {
//     id: 'cpr7',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  RPS and IoT Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     price: 900,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'RPS kit',
//         status: true,
//       },
//       {
//         name: 'IoT Design kit',
//         status: true,
//       },
//     ],
//   },
//   {
//     id: 'cpr8',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  Transformer and IoT Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     price: 400,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'Transformer Design kit',
//         status: false,
//       },
//       {
//         name: 'IoT Design kit',
//         status: false,
//       },
//     ],
//   },
//   {
//     id: 'cpr9',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  Transformer and IoT Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     price: 600,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'Transformer Design kit',
//         status: true,
//       },
//       {
//         name: 'IoT Design kit',
//         status: false,
//       },
//     ],
//   },
//   {
//     id: 'cpr10',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  Transformer and IoT Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     price: 900,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'Transformer Design kit',
//         status: false,
//       },
//       {
//         name: 'IoT Design kit',
//         status: true,
//       },
//     ],
//   },
//   {
//     id: 'cpr11',
//     category: 'COMBO_PACK',
//     eventName: 'Workshop  •  Transformer and IoT Design',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, soluta! Praesentium officia',
//     price: 1100,
//     image: {
//       src: '/images/ui/events/circuit-design.jpeg',
//       alt: 'reg-pic',
//     },
//     kits: [
//       {
//         name: 'Transformer Design kit',
//         status: true,
//       },
//       {
//         name: 'IoT Design kit',
//         status: true,
//       },
//     ],
//   },
// ];
