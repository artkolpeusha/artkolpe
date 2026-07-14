import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1d1c1b",
        bone: "#f8fbfc",
        paper: "#ffffff",
        graphite: "#5b5956",
        clay: "#d7d2cd",
        moss: "#7a8b77",
        ocean: "#1f5c73",
        sky: "#d5e6ee",
        wine: "#e33916",
        gold: "#f7f5f1",
        sage: "#8f9b86",
        ash: "#a49d97"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 21, 18, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
