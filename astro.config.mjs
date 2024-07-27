import remarkLinkCard from "remark-link-card";
import remarkCodeTitles from "remark-flexible-code-titles";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tatsumiyamamoto.com",
  integrations: [mdx(), tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [remarkCodeTitles, remarkLinkCard],
    shikiConfig: {
      theme: "github-dark-dimmed",
      wrap: false,
    },
  },
  prefetch: true,
});
