/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  plugins: [forms],
  theme: {
    extend: {
      colors: {
        'rose': '#EFC7C2',
        'lrose': '#FFE5D4',
        'ash': '#BFD3C1',
        'lbule': '#68a691',
        'brown': '#694F5D',
      },
    }
  }
};
