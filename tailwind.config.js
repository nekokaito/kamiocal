/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#1a1a1a",
          surface: "#292929",
          raised: "#363636",
          border: "#454545",
        },
      },
    },
  },
  plugins: [],
};
