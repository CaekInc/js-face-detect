/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        'mob': '430px',
      },
      colors: {
        transparent: 'transparent',
        'black': '#000000',
        'blue': {
          DEFAULT: '#3579f6',
          light: '#0F6BFF'
        },
        'gray': {
          light: '#797979',
          DEFAULT: '#808080',
          dark: '#999999'
        }
      }
    },
  },
  plugins: [],
};
