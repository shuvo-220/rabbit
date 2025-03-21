/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        padding:"45px"
      },
      colors:{
        "rabbit-red":"#ea2e0e"
      }
    },
  },
  plugins: [],
}