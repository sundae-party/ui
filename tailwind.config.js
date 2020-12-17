const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'text-primary': '#ffffff',
        'primary': '#5c6bc0',
        'primary-light': '#8e99f3',
        'primary-dark': '#26418f',
        'text-secondary': '#000000',
        'secondary': '#ffc107',
        'secondary-light': '#fff350',
        'secondary-dark': '#c79100'
      },
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
