/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    },
    fontFamily: {
      causten: ['Causten', 'sans-serif'],
      gotham: ['Gotham', 'sans-serif']
    },
  },
  plugins: [
    require('daisyui'),
  ]
};