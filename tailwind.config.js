/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  plugins: [forms],
  theme: {
    extend: {
      colors: {
        'rose': '#FCF8E8',
        'lrose': '#94B49F',
        'ash': '#ECB390',
        'lbule': '#DF7861',
        'brown': '#3C3C3C',
      },
    }
  }
};

