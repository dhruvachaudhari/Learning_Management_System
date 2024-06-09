/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'blue_dark': '#030311',
        'text-white': '#F1F2F6'
      },
    },
  },
  plugins: [],
}