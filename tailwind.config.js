/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1 : '#8BAC3E'
        },
        gray: {
        'Gray':'#333333',
        'Gray2':'#757575'
      },
      dark: {
        1 : '#333333',
      },
      water: {
        1 : '#E6F3F5'
      }

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}