export {};

// global
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REGISTRATION_STATUS: 'OPEN' | 'CLOSED' | 'OPENS_SOON';
    }
  }
}
