/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1220px",
    },
    extend: {
      colors: {
        dmsBlue: "hsl(1, 20%, 30%)",
        dmsRed: "hsl(12, 88%, 64%)",
        dmsPaleGray: "hsl(3, 10%, 90%)",
        dmsGray: "hsl(6, 20%, 70%)",
      },
    },
  },
  plugins: [],
};
