const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        'desk': '640px',
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
      },
      fontSize: {
        sm: ['12px', {
          lineHeight: '16px',
          fontWeight: 400,
        }],
        base: ['18px', {
          lineHeight: '28px',
          fontWeight: 400
        }],
        lg: ['22px', {
          lineHeight: '33px',
          fontWeight: 400
        }],
      },
      backgroundImage: {
        'hero': 'url("src/assets/hero.jpg")'
      },
    },
  },
  plugins: [
      plugin(function ({ addBase }) {
        addBase({
          'h1': {
            fontSize: '70px',
            lineHeight: '75px',
            fontWeight: '590'
          },
          'h2': {
            fontSize: '44px',
            lineHeight: '50px',
            fontWeight: '590'
          },
          'h3': {
            fontSize: '22px',
            lineHeight: '25px',
            fontWeight: '590'
          }
        })
      })
  ],
};
