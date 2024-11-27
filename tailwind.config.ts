import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {},

      screens: {
        sm: { min: "280px", max: "574px" },
        md: { min: "575px", max: "915px" },
        lg: { min: "916px", max: "1199px" },
        xl: { min: "1200px", max: "4000px" },
        gmd: { min: "991px" },
      },
    },
  },

  plugins: [],
};
export default config;
