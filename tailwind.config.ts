import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        void: "#050608",
        obsidian: "#0a0d12",
        carbon: "#121722",
        edge: "#d9f7ff",
        ember: "#ff4d3d",
        ion: "#2fe7ff",
        venom: "#d6ff4d",
        relic: "#f0c45c",
        signal: "#a77cff",
      },
      boxShadow: {
        "fracture-cyan": "0 0 38px rgba(47, 231, 255, 0.18)",
        "fracture-red": "0 0 42px rgba(255, 77, 61, 0.18)",
        "thin-glow":
          "0 0 0 1px rgba(217, 247, 255, 0.12), 0 18px 50px rgba(47, 231, 255, 0.08)",
      },
      keyframes: {
        "slow-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(10px, -16px, 0) rotate(2deg)" },
        },
        "pulse-edge": {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "slow-drift": "slow-drift 9s ease-in-out infinite",
        "pulse-edge": "pulse-edge 3.4s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
