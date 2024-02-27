/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: "'Montserrat', sans-serif",
        grand: "'Grand Hotel', cursive",
      },
      backgroundImage: {
        'G1BG-base': "url('./src/assets/images/g1/g1-bg-base.png')",
        'G1BG': "url('./src/assets/images/g1/g1-bg.png')",
        'G2BG': "url('./src/assets/images/g2/g2-bg.png')",
        'G3BG': "url('./src/assets/images/g3/g3-bg.png')",
        'G4BG': "url('./src/assets/images/g4/g4-bg.png')",
        'G5BG': "url('./src/assets/images/g5/g5-bg.png')",
        'G6BG': "url('./src/assets/images/g6/g6-bg.png')",
        'G7BG': "url('./src/assets/images/g7/g7-bg.png')",
        'G8BG': "url('./src/assets/images/g8/g8-bg.png')",
        'G9BG': "url('./src/assets/images/g9/g9-bg.png')",
      },
      colors: {
        'lightBlue': '#29a19c',
        'darkBlue': '#222831',
      },
    },
  },
  plugins: [],
}