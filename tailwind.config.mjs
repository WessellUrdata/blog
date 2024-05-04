/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4d4d4d",
          secondary: "#232629",
          accent: "#3daee9",
          neutral: "#4d4d4d",
          "base-100": "#31363b",
          info: "#2980b9",
          success: "#27ae60",
          warning: "#ed1515",
          error: "#da4453",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
