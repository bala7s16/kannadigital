/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFCA00',
          blue: '#0056D2',
          dark: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // We need to add font link in index.html or import it
      }
    },
  },
  plugins: [],
}
