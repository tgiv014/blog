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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
