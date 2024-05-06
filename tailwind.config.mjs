/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#31363b",
          secondary: "#4d4d4d",
          accent: "#3daee9",
          neutral: "#4d4d4d",
          "base-100": "#232629",
          info: "#2980b9",
          success: "#27ae60",
          warning: "#ed1515",
          error: "#da4453",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
