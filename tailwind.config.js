/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-elements': 'hsl(209, 23%, 22%)',
        'dark-background': 'hsl(207, 26%, 17%)',
        'light-text': 'hsl(200, 15%, 8%)',
        'light-input': 'hsl(0, 0%, 52%)',
        'light-background': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
} 