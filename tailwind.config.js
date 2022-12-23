/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      '2xs': '100px',
      '3xs': '250px',
    },
    extend: {
      margin: {
        '100': '1000px',
      }
    },
  },
  plugins: [
    
  ],
}
