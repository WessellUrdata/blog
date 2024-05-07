import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  // output: "server",
  // adapter: cloudflare()
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],

    // for syntax highlighting
    shikiConfig: {
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
