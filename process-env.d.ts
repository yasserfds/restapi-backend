declare global {
  namespace restAPI {
    interface ProcessEnv {
      PORT: string;
      MONGODB_URI: string;
      // add more environment variables and their types here
    }
  }
}
