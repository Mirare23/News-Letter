/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "Tomato": "hsl(4, 100%, 67%)",
      "DarkSlateGrey": "hsl(234, 29%, 20%)",
      "Charcoal-Grey": "hsl(235, 18%, 26%)",
      "Grey": "hsl(231, 7%, 60%)",
      "White": "hsl(0, 0%, 100%)"
    },
    extend: {},
  },
  plugins: [],
}

