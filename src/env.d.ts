declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_ID: string;
      EMAIL_PASSWORD: string;
      RECEIVER_EMAIL: string;
    }
  }
}

export {}
