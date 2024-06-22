import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import remarkMath from "remark-math";
import emoji from "remark-emoji";

import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://wesl.cc",
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath, emoji],
    rehypePlugins: [rehypeKatex],
    // shiki is used for code snippet syntax highlighting
    shikiConfig: {
      wrap: true, // Enable word wrap to prevent horizontal scrolling
    },
  },
});
