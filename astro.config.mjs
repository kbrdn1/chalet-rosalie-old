import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/edge';
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  experimental: {
    assets: true,
  },
  adapter: vercel({
    imageService: true,
    webAnalytics: { enabled: true }
  }),
  site: "https://chalet-rosalie.com",
  integrations: [vue({ devtools: true }), mdx()],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    rollupOptions: {
      external: ["lucide-vue-next"],
    },
  },
});
