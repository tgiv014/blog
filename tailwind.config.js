/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./content/**/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Iosevka Web", "monospace"],
        sans: ["Iosevka Aile Web", "sans-serif"]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // "code::before": {content: ''},
            // "code::after": {content: ''},
            "code":{
              color: theme('colors.teal.800'),
              "font-stretch": "expanded",
            },
            "h1 code": {
              color: theme('colors.teal.800')},
            "h2 code": {
              color: theme('colors.teal.800')},
            "h3 code": {
              color: theme('colors.teal.800')},
            "h4 code": {
              color: theme('colors.teal.800')},
          }
        }
      })
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
