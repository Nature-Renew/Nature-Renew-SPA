/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#90EE90', // Custom green color
        'primary-yellow': '#DAB634', // taken from figma file
        'primary-color-600': '#AFE1AF', // Custom green color 2 
      },
      backgroundImage: {
        'white-to-transparent': 'linear-gradient(to top,rgba(255, 255, 255, .25), rgba(160, 160, 160, .05))',
      },
    },
  },
  plugins: [],
}