import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDF8F4",
        "cream-dark": "#F5EDE6",
        gold: "#C9A96E",
        "gold-light": "#D4B98A",
        "gold-dark": "#B8944F",
        charcoal: "#2C2C2C",
        "charcoal-light": "#4A4A4A",
        blush: "#F2E0D6",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Lato", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
