import { defineConfig } from "unocss";
import { presetUno, presetTypography } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        h1: {
          margin: "inherit",
        },
        "h2, h3, h4, h5, h6": {
          "margin-bottom": "24px",
        },
        img: {
          margin: "0 auto",
          height: "83.3%",
          "max-height": "360px",
          "border-radius": ".25rem",
        },
        math: {
          "font-size": "1.21rem",
        },
        "code ::before, code ::after": {
          content: "none",
        },
      },
    }),
  ],
  theme: {
    colors: {
      // ripped from Breeze Dark
      base: "#232629", // view, BackgroundNormal
      primary: "#31363b", // view, BackgroundAlternate
      accent: "#ffcc4d",
      neutral: "#4d4d4d",

      // secondary: "#4d4d4d",
      // info: "#2980b9",
      // success: "#27ae60",
      // warning: "#ed1515",
      // error: "#da4453",
    },
  },
  preflights: [
    {
      getCSS: ({ theme }) => `
        :root {
          background-color: ${theme.colors!.base};
          color: #cecfd0; /* Your text color */
        }
      `,
    },
  ],
});
