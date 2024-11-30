/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#122543",
        'primary-dark': "#034833",
        'primary-light': "#283F63",
        'secondary': "#D8B439",
        'secondary-light': '#48D36D',
        'accent': "#C8A628",
        'light-gray': "#F4F4F4",
        'gray': "#DADADA",
        'dark-gray':"#595959",
        'default': "#484848"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}