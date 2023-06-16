/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
        'Gray':'#333333',
        'Gray2':'#757575'
      }
      }
    },
  },
  plugins: [],
}