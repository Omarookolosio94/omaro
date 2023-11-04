/** @type {import('tailwindcss').Config} */

const generateColor =
  (variable) =>
  ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(${variable}), ${opacityValue})`
      : `rgb(var(${variable}))`;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,ts}'],
  theme: {
    extend: {
      colors: {
        'white-color': generateColor('--white-color'),
        'darkwhite': '#e9e9e9',
        'black-color': generateColor('--black-color'),
        'blue-color': generateColor('--blue-color'),
        'dark-green-color': generateColor('--dark-green-color'),
        'muted-color': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        proxima: 'Proxima Nova',
        'feijoa-display': 'Feijoa Display, serif',
        operator: 'Operator, monospace',
        sohne: 'Sohne, sans-serif',
      },
      fontSize: {
        exs: '10px',
      },
      boxShadow: {},
      width: {},
      zIndex: {
        100: '100000',
      },
    },
  },
  plugins: [],
};
