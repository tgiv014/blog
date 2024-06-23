/** @type {import('tailwindcss').Config} */

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`
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
        sm: {
          css: {
            pre: {
              fontSize: rem(14),
            },
            code: {
              fontSize: rem(14),
            },
            // "code::before": {content: ''},
            // "code::after": {content: ''},
          }
        }
      })
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
