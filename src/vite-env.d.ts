/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WA_ADMIN_1: string;
  readonly VITE_WA_ADMIN_2: string;
  readonly VITE_INSTAGRAM_URL: string;
  readonly VITE_TIKTOK_URL: string;
  readonly VITE_MAPS_URL: string;
  readonly VITE_MAPS_EMBED_URL: string;
  readonly VITE_GA_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

