/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f9',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9f1239',
          900: '#831843',
        },
        pink: {
          DEFAULT: '#db2777',
        },
        'deep-purple': {
          DEFAULT: '#2a013c',
        },
        purple: {
          DEFAULT: '#db2777',
        },
        beige: {
          light: '#F0EBEA',
          DEFAULT: '#F3DED9',
        },
      },
    },
  },
  plugins: [],
}

