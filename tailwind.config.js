/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-pink':'#ec4899',
      }
    },
  },
  plugins: [],
}
