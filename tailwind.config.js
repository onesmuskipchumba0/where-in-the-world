/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark-primary': 'hsl(207, 26%, 17%)',     // Dark background
        'dark-secondary': 'hsl(209, 23%, 22%)',    // Dark elements
      },
      colors: {
        'dark-text': 'hsl(0, 0%, 100%)',          // Dark mode text
        'light-text': 'hsl(200, 15%, 8%)',        // Light mode text
      },
    },
  },
  plugins: [],
} 