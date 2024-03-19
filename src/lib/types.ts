export {};

// global
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Registration
      REGISTRATION_STATUS: 'OPEN' | 'CLOSED' | 'OPENS_SOON';
      EMAIL_SERVER_HOST: string;
      EMAIL_SERVER_PORT: string;
      EMAIL_SERVER_USER: string;
      EMAIL_SERVER_PASSWORD: string;

      // App
      NEXT_PUBLIC_BASE_URL: string;

      // Drizzle
      DATABASE_URL: string;
    }
  }
}
