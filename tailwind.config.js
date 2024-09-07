/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-gradient": "linear-gradient(61deg, #44471d, #202922);",
        "background-card-gradient":
          "linear-gradient(61deg, rgba(0,0,0,0.4), rgba(0,0,0,0.1))",
      },
    },
  },
  plugins: [],
};
