import type { Config } from "tailwindcss";

export default {
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
        "dark":"rgb(9 26 40) "

      },
   fontSize:{
    "custom":"18px"
   },
   fontFamily: {
    custom: ['"Roboto"', 'sans-serif'], // Fuente personalizada
  },
   
    },
  },
  plugins: [],
} satisfies Config;
