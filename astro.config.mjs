import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import remarkMath from "remark-math";
import emoji from "remark-emoji";

import rehypeKatex from "rehype-katex";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://wesl.cc",
  integrations: [tailwind(), mdx(), sitemap()],
  // output: "hybrid",
  // adapter: cloudflare(),
  markdown: {
    remarkPlugins: [remarkMath, emoji],
    rehypePlugins: [rehypeKatex],
    // for syntax highlighting
    shikiConfig: {
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
