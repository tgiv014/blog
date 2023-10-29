/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./content/**/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
        sans: ["Nunito", "sans-serif"]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // "code::before": {content: ''},
            // "code::after": {content: ''},
            "code":{
              color: theme('colors.teal.800'),
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
