/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
    fontFamily: {
      rrr: ['Rubik', 'sans-serif'],
    },
  },
    screens: {
      l: { max: '1400px' },
      // => @media (max-width: 1400px) { ... }

      s: { max: '330px' },
      // => @media (max-width: 330px) { ... }
    },
  },
};