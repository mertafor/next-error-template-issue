import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,json}",
    "./components/**/*.{js,jsx,ts,tsx,json}",
    "./app/**/*.{js,jsx,ts,tsx,json}",
    "./app/locale/**/*.{js,jsx,ts,tsx,json}",
    "./src/**/*.{js,jsx,ts,tsx,json}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
  tailwindFunctions: ["clsx", "cva", "cn"],
} satisfies Config;
