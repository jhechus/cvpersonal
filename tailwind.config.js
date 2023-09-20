/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Verde: "#5FB4A2",
        Azuloscuro: "#203A4C",
        Gris: '#33323D',
      },
      fontFamily: {
        Ibarra: ['Ibarra_real_nova'],
        Sans: ['Public_Sans'],
      }
    },
  },
  plugins: [],
}