/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*/.js"],
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        veryLighhGrayishCyan: 'hsl(189, 41%, 97%)'
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
