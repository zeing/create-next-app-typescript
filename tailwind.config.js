/** @type {import('tailwindcss').Config} */
// detail in https://github.com/tailwindlabs/tailwindcss/blob/4a745439f010aca2ea24bb7fd9ab0ac3e15a40c1/types/config.d.ts
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
