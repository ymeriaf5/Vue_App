/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:['Poppins','sans-serif']
      },
      gridTemplateColums:{
        '70/30': '70% 28%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

