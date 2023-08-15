/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'logoColor': "#5AC5CD",
        'light-blue': colors.lightBlue,
          cyan: colors.cyan,
      }
    },
    gridTemplateColumns: {
      'fill-40': 'repeat(auto-fill, minmax(5em, 20em))',
    },
    // screens:{
    //   'mobile':{'max' : '480px'}
    // },
    backgroundImage:{
      'hero-dog' : "url('./src/assets/heroDog3.jpg')]",
    }
  },
  plugins: [
  ],
}

