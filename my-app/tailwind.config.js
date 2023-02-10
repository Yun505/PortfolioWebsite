const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      yellow: colors.yellow,
      stone: colors.stone,
      green: colors.green,
      sky: colors.sky,
      violet: colors.violet
    },
    extend: {
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),

  ],

  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
