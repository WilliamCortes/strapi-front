import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#7986cb",
          DEFAULT: "#3f51b5",
          dark: "#303f9f",
        },
        secondary: {
          light: "#ff4081",
          DEFAULT: "#f50057",
          dark: "#c51162",
        },
        background: "#ffffff",
        surface: "#f5f5f5",
        error: "#f44336",
        onPrimary: "#ffffff",
        onSecondary: "#ffffff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
