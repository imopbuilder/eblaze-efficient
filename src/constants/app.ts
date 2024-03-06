export const APP = {
  default: 'Eblaze',
  template: 'Eblaze',
  description: 'Join Our Electrifying Lineup of Events and Gatherings.',
  url: 'https://eblaze.vercel.app',
};

export const REGISTRATION_ROUTE = {
  id: 'rr1',
  label: 'Register',
  href: '/users/registration',
  src: 'registration-heading.svg',
};

export type AppLink = {
  id: string;
  label: string;
  href: string;
  src: string;
};
export const APP_LINKS: AppLink[] = [
  {
    id: 'ap1',
    label: 'Home',
    href: '/',
    src: 'hero-section.svg',
  },
  {
    id: 'ap2',
    label: 'About',
    href: '/about',
    src: 'about-heading.svg',
  },
  {
    id: 'ap3',
    label: 'Gallery',
    href: '/gallery',
    src: 'gallery-heading.svg',
  },
  {
    id: 'ap4',
    label: 'Events',
    href: '/events',
    src: 'event-heading.svg',
  },
  {
    id: 'ap5',
    label: 'Contact',
    href: '/contact',
    src: 'contact-heading.svg',
  },
];

export const PROFILE = {
  id: 'rahul_palamarthi',
  label: 'Rahul Palamarthi',
  social: 'https://www.linkedin.com/in/rahul-palamarthi',
};
