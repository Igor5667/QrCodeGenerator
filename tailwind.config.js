const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-gradient": "linear-gradient(61deg, #44471d, #202922);",
        "background-card-gradient":
          "linear-gradient(61deg, rgba(0,0,0,0.4), rgba(0,0,0,0.1))",
        "background-phone-gradient":
          "linear-gradient(rgba(38,76,46,1), rgba(100,105,26,1))",
      },
    },
  },
  plugins: [],
});
