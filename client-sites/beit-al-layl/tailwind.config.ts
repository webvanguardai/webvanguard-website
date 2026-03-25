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
        midnight: "#0D0B0E",
        gold: "#C9A55A",
        cream: "#F5F0E8",
        "gold-light": "#D4B87A",
        "midnight-light": "#1A1720",
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
