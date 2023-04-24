/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx}",
    {
      transform: (content) => content.replace(/taos:/g, ''),
    }
    
  ],
  theme: {
    extend: {},
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
}
