/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#111827',
        'background-light': '#F9FAFB',
        'background-dark': '#0D1117',
        'accent-teal': '#14B8A6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
