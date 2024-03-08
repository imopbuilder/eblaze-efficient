export {};

// global
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REGISTRATION_STATUS: 'OPEN' | 'CLOSED' | 'OPENS_SOON';
      NEXT_PUBLIC_BASE_URL: string;
      STRIPE_SECRET_KEY: string;
    }
  }
}
