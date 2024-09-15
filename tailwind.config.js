/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#C89F94',
        'bold-coffee' : '#A25F4B',
        'bolder-coffee': '#a1391a'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        fadeIn: {
          from: { opacity: 0},
          to: { opacity: 1}
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        slideUp: 'slideUp .4s ease-in',
        fadeIn: 'fadeIn .4s ease-in-out'
      }
    },
  },
  plugins: [],
}

