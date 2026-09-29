// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://itisummerkot.edu.in",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/sitemap/") && !page.includes("/screen-reader-access/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
