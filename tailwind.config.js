/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': {
        50: '#FFF5DE',
        100: '#FFE7AE',
        200: '#FFDE8D',
        300: '#FFD46A',
        400: '#FFC331',
        500: '#F9B81A',
        600: '#FEB90F',
        700: '#E0A30B',
        800: '#AE7B00',
        900: '#7D5D0C',
      },
      'secondary': {
        50: '#FFF2EE',
        100: '#FFE3D9',
        200: '#FFC1AD',
        300: '#FF9A78',
        400: '#FB7C51',
        500: '#EB6437',
        600: '#DB4310',
        700: '#BA3D14',
        800: '#621A01',
        900: '#3C1002',
      },
      'darkFont': '#3C1002',
      white: colors.white,
      black: colors.black,
      red: colors.red,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      violet: colors.violet,
      green: colors.emerald,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
      trueGray: colors.trueGray,
      gray: colors.gray,
      lime: colors.lime,
      rose: colors.rose,
      teal: colors.teal,
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'mobBigBox':'3rem',
      'bigBox':'6rem'
    },
    fontFamily: {
      'mont': ['Montserrat Alternates', 'san-serif'],
      'sans': ['DM sans', 'san-serif']
    },
    screens: {
      'xs': '340px',
      // => @media (min-width: 400px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      '3xl': '2560px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
