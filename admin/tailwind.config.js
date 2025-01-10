/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#FFBF00",
        'secondary':  "#EE4B2B",
        'third': "770737"
      },
    },
  },
  plugins: [],
}