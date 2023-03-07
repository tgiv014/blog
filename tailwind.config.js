/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./content/**/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Berkeley Mono", "monospace"],
      },
      backgroundImage: {
        "wave-pattern": "url('/img/wave.svg')",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": {content: ''},
            "code::after": {content: ''},
            "code":{
              color: theme('colors.amber.400')
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
