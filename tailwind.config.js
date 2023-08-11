/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'logoColor': "#5AC5CD" 
      }
    },
    // screens:{
    //   'mobile':{'max' : '480px'}
    // }
  },
  plugins: [
  ],
}

