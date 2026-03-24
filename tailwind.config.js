/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand accent — Mustard (#F1C142 from phoscreatives.africa)
        phos: {
          50:  '#fefce8',
          100: '#fef5c0',
          200: '#feec82',
          300: '#fde040',
          400: '#f8cc22',
          500: '#F1C142', // ← brand mustard
          600: '#d4a01c', // ← button hover
          700: '#a87c18',
          800: '#7d5d12',
          900: '#5c430f',
          950: '#36270a',
        },
        // Dark anchor — Warm neutral (complements mustard, no blue)
        ink: {
          50:  '#f7f6f3',
          100: '#eceae4',
          200: '#d5d0c4',
          300: '#b5ae9e',
          400: '#8f8572',
          500: '#6b6350',
          600: '#514b3b',
          700: '#3a3526',
          800: '#252116',
          900: '#161410',
          950: '#0c0b09', // ← hero backgrounds
        },
      },
      fontFamily: {
        sans: ['Degular', 'system-ui', 'sans-serif'],
        display: ['"Brutal Milk"', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
