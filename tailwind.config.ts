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
        background:{
          DEFAULT: '#0a0a0a',
          sidebar: '#111111'
        },
        invalid:{
          DEFAULT: '#f45050'
        },
      },
      fontFamily: {
        blackout: "var(--blackout), sans-serif",
        highrise: "var(--highrise), sans-serif",
        "highrise-bold": "var(--highrise_bold), sans-serif",
        stretch: "var(--stretch), sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
