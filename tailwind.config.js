/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      'colors': {
        'bootbnb': {
          '50': '#effefb',
          '100': '#cafdf6',
          '200': '#95faef',
          '300': '#57f1e4',
          '400': '#25dcd4',
          '500': '#0cbab5',
          '600': '#079a99',
          '700': '#0a7b7b',
          '800': '#0d6162',
          '900': '#105151',
          '950': '#022e31',
      },
      },
      
    },
  },
  plugins: [],
}

