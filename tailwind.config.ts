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
        ink: "#050505",
        graphite: "#0B0B0D",
        carbon: "#111114",
        forest: "#18181B",
        emerald: "#7F1D1D",
        glow: "#EF4444",
        champagne: "#F87171",
        platinum: "#FFFFFF",
        smoke: "#D1D5DB"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.48)",
        green: "0 18px 60px rgba(127, 29, 29, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
