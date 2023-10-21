/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#405CC2",
        "secondary":"#4C5A8F",
        "accent1":"#204EF5",
        "accent2":"#43485C",
        "accent3":"#2C2E33"
      }
    },
  },
  plugins: [],
}

