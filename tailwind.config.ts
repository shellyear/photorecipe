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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mandy: "var(--mandy)",
        mandydark: "var(--mandy-dark)",
        mandylight: "var(--mandy-light)"
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
