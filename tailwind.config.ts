import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f4dd7",
        accent: "#64d17c",
        dark: "#0f172a"
      },
      fontFamily: {
        sans: ["'Noto Sans JP'", "ui-sans-serif", "system-ui"],
        display: ["'Shippori Mincho'", "serif"]
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 20% 20%, rgba(100,209,124,0.35), transparent 55%), radial-gradient(circle at 80% 10%, rgba(47,77,215,0.45), transparent 60%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.25), transparent 60%)"
      },
      boxShadow: {
        glass: "0 20px 45px -25px rgba(47, 77, 215, 0.75)"
      }
    }
  },
  plugins: []
};

export default config;
