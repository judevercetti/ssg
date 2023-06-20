/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./resources/**/*.{js,jsx,ts,tsx}",
    {
      transform: (content) => content.replace(/taos:/g, ''),
    }
    
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#ca8a04',
      'primary-hover': '#aa8a04'
    },
    dialog: {
      styles: {
        sizes: {
          sm: {
            width: "w-full",
            minWidth: "min-w-[100%]",
            maxWidth: "max-w-[100%]",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('taos/plugin'),
    require("@material-tailwind/react/utils/withMT")
  ],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
})