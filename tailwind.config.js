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
        'black-color': generateColor('--black-color'),
        'blue-color': generateColor('--blue-color'),
        'dark-green-color': generateColor('--dark-green-color'),
        'muted-color': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        proxima: 'Proxima Nova',
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
