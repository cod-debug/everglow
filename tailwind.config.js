/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFF',
        primary: '#122543',
        'primary-light': '#283F63',
        secondary: '#D8B439',
        accent: '#C8A628',
        grey:'#D9D9D9',
        black: '#484848',
        blue: "#121063",
      },
    }
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
}

