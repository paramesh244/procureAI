/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // add more env vars here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
