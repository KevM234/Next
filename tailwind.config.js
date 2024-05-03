/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      width: {
        xl: "1150px",
        l: "950px",
      },
      fontSize: {
        "my-text-size": "12px",
        "my-text-size-2": "49px",
        "my-text-size-3": "23px",
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        customBlue: "#03DBD1",
        customGreen: "#93D10D",
        customAzzur: "#02EEE3",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },

  plugins: [],
};
