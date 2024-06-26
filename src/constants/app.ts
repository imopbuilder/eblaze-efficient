export const APP = {
  default: 'Eblaze',
  template: 'Eblaze',
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

export const OTHER_LINKS: AppLink[] = [
  {
    id: 'ol1',
    label: 'Terms of Service',
    href: '/terms-of-service',
    src: 'terms-and-service-heading.svg',
  },
  {
    id: 'ol2',
    label: 'Privacy Policy',
    href: '/privacy-policy',
    src: 'privacy-policy-heading.svg',
  },
];
