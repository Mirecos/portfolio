/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'darker': '#0E1629',
       'lighter': '#2F4160',
       'card': '#1E293B',
       'border': '#353F4F',
       'text': '#6DB8DD',
       'gray-bg': '#F3F4F5'
      },

     }
  },
  plugins: [],
}

