/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly SPOTIFY_API_ID: string;
  readonly SPOTIFY_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
