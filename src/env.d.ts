/// <reference types="astro/client-image" />

interface ImportMetaEnv {
	readonly PUBLIC_VERCEL_ANALYTICS_ID: string;
	readonly STRAPI_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
