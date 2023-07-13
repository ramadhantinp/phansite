/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html, js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'viga':['Viga', 'sans-serif']
      }
    },
  },
  plugins: [],
}
