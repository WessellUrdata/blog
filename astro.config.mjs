import { defineConfig } from "astro/config";

import UnoCSS from "unocss/astro";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import remarkMath from "remark-math";
import emoji from "remark-emoji";

import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://wesl.cc",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkMath, emoji],
    rehypePlugins: [[rehypeKatex, { output: "mathml" }]],
    // shiki is used for code snippet syntax highlighting
    shikiConfig: {
      theme: "dark-plus",
      wrap: true,
    },
  },
});
