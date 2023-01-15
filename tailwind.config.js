/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      title: ["Rowdies", "cursive"],
      mulish: ["Mulish", "sans-serif"],
      noto: ["Noto Serif", "serif"],
    },
  },
  plugins: [],
};
