/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000957",
        secondary: "#FFEB00",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      logo: ["'Winky Rough'", "cursive"],
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".stroke-text": {
          "--tw-text-opacity": "1",
          "-webkit-text-stroke-width": "1.4px",
          "-webkit-text-fill-color": "transparent",
          "-webkit-text-stroke-color": theme("colors.secondary"),
        },
        ".text-stroke-primary": {
          "-webkit-text-stroke-color": theme("colors.primary"),
        },
        ".dark .text-stroke-secondary": {
          "-webkit-text-stroke-color": theme("colors.secondary"),
        },
      };
      addUtilities(newUtilities, ["responsive", "dark"]);
    },
  ],
};
