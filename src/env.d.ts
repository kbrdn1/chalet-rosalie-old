/// <reference types="astro/client-image" />

interface ImportMetaEnv {
	readonly PUBLIC_VERCEL_ANALYTICS_ID: string;
	readonly STRAPI_URL: string;
	readonly STRAPI_API_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
