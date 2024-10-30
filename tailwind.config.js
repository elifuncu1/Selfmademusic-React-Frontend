/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'start': 'rgba(43, 40, 28, 1)',
        'middle': 'rgba(238, 202, 77, 1)',
      },
     
    },
  },
  plugins: [],
}

