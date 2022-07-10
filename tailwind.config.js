/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'mobile': {'max': '420px'},

      

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
