/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueSecondary': '#2A2550',
        'blueSecondaryLight': '#3d3579',
        'primaryOrange': '#E04D01',
        'primaryOrangeLight': '#e76525',
        'secondaryOrange': '#FF7700',
        'secondaryOrangeLight': '#f58e33'
      }
    },
  },
  plugins: [],
}
