/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_brand: '#5d3ebc',
        secondary_brand: '#7849f7',
        brand: '#4c3398',
      },
    },
  },
  plugins: [],
};
