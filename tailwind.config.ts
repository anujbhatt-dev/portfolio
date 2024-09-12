import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          complementry:"#FABC3F",
          DEFAULT: '#ebebeb',  // Dark Blue (Primary)
        },
        secondary: {
          DEFAULT: '#1a1a1a', // Orange (Secondary)
        },
        link: {
          hover:"#9b38d1",
          active:"#7a1cac",
          DEFAULT: '#ebebeb', // Dark Gray
        },
      },
    },
  },
  plugins: [],
};
export default config;
