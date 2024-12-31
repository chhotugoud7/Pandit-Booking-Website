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
      animation: {
        'zoom-in-out': 'zoomInOut 3s infinite', // Animation name and duration
      },
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' }, // Normal size
          '50%': { transform: 'scale(1.2)' }, // Zoomed in
        },
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}