import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(8, 125, 234, 1)', 
        secondary: 'rgba(255, 211, 0, 1)',
        background: 'rgba(254, 252, 245, 1)',
        accent1: 'rgba(255, 242, 242, 1)',
        accent2: 'rgba(249, 255, 236, 1)',
        text: 'rgba(13, 13, 13, 1)', 
        brandBlue: '#0047AB', 
        brandGray: '#838383',
        brandRed: '#D72631',
        brandGreen: '#009688',
        brandYellow: '#FFC107',
        brandIndigo: '#3F51B5',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
