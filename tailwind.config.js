/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#010409',
        githubBlue: '#0d1117',
      },
      zIndex: {
        '1400': '1400',
      },
      screens: {
        'xl': '1230px', // Custom breakpoint for 1230px
      },
      backgroundColor: {
        inherit: 'inherit',
        darkSecondary: '#151b23',
      },
      borderColor: {
        'custom-bottom': '#2e343d',
      },
    },
  },
  plugins: [],
};