import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro,vue}",
    "./pages/**/*.{ts,tsx,js,jsx,astro,vue}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          black: { value: "#2D2520" },
          white: { value: "#FAF8F0" },
          olivine: { value: "#ADC178" },
          teaGreen: { value: "#DDE5B6" },
          parchment: { value: "#F0EAD2" },
          umber: { value: "#6C584C" },
          chamoisee: { value: "#A98467" },
        },
        fonts: {
          body: { value: "Onest, system-ui, sans-serif" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
