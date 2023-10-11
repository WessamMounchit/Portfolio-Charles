/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'primary': '#93441A',
        'secondary': '#B67332',
        'tertiary': '#DAAB3A'
      },  
      fontFamily: {
        primary: ['Playfair Display', 'serif'],
        secondary: ['Cormorant Garamond', 'serif']
      }
    },
  },
  plugins: [],
}