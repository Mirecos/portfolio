/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'darker': '#0E1629',
       'lighter': '#0B2136',
      }
     }
  },
  plugins: [],
}

