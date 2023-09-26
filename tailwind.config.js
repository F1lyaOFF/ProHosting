/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx,html}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        mainColor: '5B247A'
      },
      screens: {
        sm: '520px'
      }
    },
  },
  plugins: [],
}

