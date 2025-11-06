import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(pages)/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2745',
          dark: '#051729',
          light: '#1A3A5C',
        },
        accent: {
          orange: '#EF9309',
          'orange-dark': '#D68108',
          yellow: '#FFB800',
          green: '#00D09C',
        },
        navy: {
          DEFAULT: '#0A2745',
          light: '#1A2B42',
        },
        gray: {
          text: '#8E8E8E',
          dark: '#363636',
          border: '#E2E8FE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1550px',
      },
    },
  },
  plugins: [],
};

export default config;