/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      container : {
        center : true
      },
      colors : {
        'primary' : '#101827',
        'secondary' : '#0db8a6', 
        'equal' : '#efeeea' 
      }
    },
  },
  plugins: [],
}

