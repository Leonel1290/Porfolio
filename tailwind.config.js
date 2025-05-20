/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-blue-bg': '#0D1F23',
        'medium-blue-bg': '#132E35',
        'primary-green': '#698180',
        'text-light': '#AFB3B7',
        'dark-hover': '#2D4A53',
      }
    },
  },
  plugins: [],
}