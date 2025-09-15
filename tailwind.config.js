/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A53DFF",
      },
      fontFamily: {
        lato: ["lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
};
