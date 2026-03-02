import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(77,163,255,0.25), 0 0 60px rgba(184,107,255,0.20)",
        glowStrong: "0 0 60px rgba(77,163,255,0.35), 0 0 90px rgba(184,107,255,0.30)",
      },
    },
  },
  plugins: [],
} satisfies Config;
