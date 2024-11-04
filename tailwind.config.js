/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#2ab3b1",
        lime: "#C0DF33",
        grey: "#9AA7BE",
        lightgreen: "#79babb",
        bgBody: "#F2F2F2",
      },
      fontFamily: { karla: "Karla" },
    },
  },
  plugins: [],
};
