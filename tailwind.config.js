const defaultTheme = require("tailwindcss/defaultConfig");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontWeight: ["hover", "focus"],
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {},
  plugins: [],
};
