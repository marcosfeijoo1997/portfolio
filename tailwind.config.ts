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
        "dark":"rgb(9 26 40) ",

        customblue:"rgb(1, 42, 142)"

      },
      
   fontSize:{
    "custom":"18px"
    
   },
   fontFamily: {
    sans: ['"Roboto"', '"Arial"', 'sans-serif'],
    serif: ['"Merriweather"', '"Georgia"', 'serif'],
    mono: ['"Courier New"', '"Menlo"', '"Monaco"', 'monospace'],
    custom: ['"Lato"', 'sans-serif'],
    heading: ['"Poppins"', 'sans-serif'],
    display: ['"Montserrat"', 'sans-serif'],
    body: ['"Open Sans"', 'sans-serif'],
    special: ['"Droid Sans"', 'sans-serif'],
  },
   
    },
  },
  plugins: [],
} satisfies Config;
