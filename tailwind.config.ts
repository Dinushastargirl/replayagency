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
        canvas: "#F7F6F2",
        surface: "#ECEAE2",
        primary: {
          DEFAULT: "#1F2B1E",
          deep: "#1F2B1E",
        },
        secondary: {
          DEFAULT: "#2D3D2B",
          olive: "#2D3D2B",
        },
        muted: "#6B7A68",
        border: "rgba(31, 43, 30, 0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-up": "revealUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        revealUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
