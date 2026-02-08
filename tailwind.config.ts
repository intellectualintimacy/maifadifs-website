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
        mfs: {
          navy: "#0A192F",     // Trust & Authority
          gold: "#C5A059",     // Success & Premium Service
          blue: "#1E3A8A",     // Professionalism
          slate: "#F8FAFC",    // Clean backgrounds
          charcoal: "#334155", // Modern text
        },
      },
    },
  },
  plugins: [],
};
export default config;