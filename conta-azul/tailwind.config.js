/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

// eslint-disable-next-line no-undef
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-conta-azul': '#6f6f6f',
        'azul-conta-azul': '#1e87f0',
        'azul-hover-conta-azul': '#0f6ecd',
        'azul-claro-conta-azul': '#f1f4f9',
        'cinza-escuro-conta-azul': '#333',
        'azul-claro-hover-conta-azul': '#eaeef6',
        'verde-folha-conta-azul':'#26b547',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      fontSize: {
        'titleHome': '42px',
      }
    },
  },
  plugins: [],
});