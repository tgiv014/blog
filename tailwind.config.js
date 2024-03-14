/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./content/**/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Berkeley Mono", "monospace"],
        sans: ["InterVariable", "sans-serif"]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // "code::before": {content: ''},
            // "code::after": {content: ''},
          }
        }
      })
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
