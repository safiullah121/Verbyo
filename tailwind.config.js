/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "390px",
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "right-border-gradient":
          "linear-gradient(90deg, rgba(105, 230, 137, 1), rgba(27, 120, 53, 1))",
      },
    },
  },
  plugins: [],
};
