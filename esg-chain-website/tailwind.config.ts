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
        primary: "#FF6363",
        secondary: "#FFFFFF",
        tertiary: {
          100: "#629C9E",
          200: "#395b5c",
        }
      },
    },
  },
  plugins: [],
};
export default config;
