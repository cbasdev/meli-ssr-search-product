/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: {
        0: '#ffffff',
        100: '#fafafa',
      },
      primary: {
        50: '#FFF9BD',
        100: '#FFF693',
        200: '#FFF693',
        300: '#FFF583',
        400: '#FFF372',
        500: '#fff159',
        600: '#E6D950',
        700: '#CCC147',
        800: '#BFB543',
        900: '#BFB543',
      },
      purple: {
        50: '#663399',
      },
      gray: {
        50: '#bfbfbf',
        100: '#00000080',
        200: '#ededed',
      },
      blue: {
        50: '#3583fa',
        100: '#2968c8',
        200: '#e5effb',
      },
      green: {
        50: '#00a650',
      },
    },
  },
  plugins: [],
}
