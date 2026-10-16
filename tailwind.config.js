/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0a0c10', fizz: '#c6ff3d' },
    },
  },
  plugins: [],
};
