/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gotham-black': ['Gotham-Black'],
        'gotham-bold': ['Gotham-Bold'],
        'gotham-bookitalic': ['Gotham-BookItalic'],
        'gotham-light': ['Gotham-Light'],
        'gotham-thin': ['Gotham-Thin'],
        'gotham-thinitalic': ['Gotham-ThinItalic'],
        'gotham-ultralight': ['Gotham-UltraItalic'],
        'gotham-xlight': ['Gotham-XLight'],
        'gotham-xlightitalic': ['Gotham-XLightItalic']
      },
    },
  },
  plugins: [],
}