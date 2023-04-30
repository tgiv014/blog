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
            "code::before": {content: ''},
            "code::after": {content: ''},
            "code":{
              color: theme('colors.amber.400'),
              "font-stretch": "expanded",
            },
            "h1 code": {
              color: theme('colors.amber.400')},
            "h2 code": {
              color: theme('colors.amber.400')},
            "h3 code": {
              color: theme('colors.amber.400')},
            "h4 code": {
              color: theme('colors.amber.400')},
          }
        }
      })
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
