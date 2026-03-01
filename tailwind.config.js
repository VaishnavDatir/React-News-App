/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Bodoni Moda", "serif"],
        title: ["Bentham", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};