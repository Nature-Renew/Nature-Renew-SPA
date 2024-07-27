/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2DC0C9', // Custom teal color
        'primary-yellow': '#DAB634', // taken from figma file
      },
      backgroundImage: {
        'white-to-transparent': 'linear-gradient(to top,rgba(255, 255, 255, .25), rgba(160, 160, 160, .05))',
      },
    },
  },
  plugins: [],
}