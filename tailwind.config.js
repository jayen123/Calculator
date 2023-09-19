/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      container : {
        center : true
      },
      colors : {
        'primary' : '#57c5cf',
        'secondary' : '#101827',
        'equal' : '#efeeea'
      }
    },
  },
  plugins: [],
}

