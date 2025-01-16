import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customMaroon:"#AF6332",
        customOrange:"#FF7B27",
        customLightMaroon:"#EEAC83",
        customLight:"#FFF2EA",
        customRed:"#EC4444",
        customLightOrange:"#FAE5D7",
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
