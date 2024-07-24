/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    },
    fontFamily: {
      pristina: ['Pristina', 'cursive'],
      perpetua: ['Perpetua', 'serif'],
      merriweather: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    require('daisyui'),
  ]
};