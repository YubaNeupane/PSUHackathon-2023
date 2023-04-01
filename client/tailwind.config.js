/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        darkGreen: "#264653",
        lightGreen: "#2A9D8F",
        yellow: "#E9C46A",
        darkYellow: "#F4A261",
        orange: "#E76F51",
        white: "#FFF",
        black: "#000",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/src/resources/images/home/HeroGradient.svg')",
      },
      animation: {
        wiggle: "scale-150 1s ease-in-out infinite",
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [require("autoprefixer"), require("tailwind-scrollbar-hide")],
};
