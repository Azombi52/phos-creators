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
        // Dark anchor — Teal-Navy (derived from #0d789e, phoscreatives.africa)
        ink: {
          50:  '#eef7fb',
          100: '#d5edf7',
          200: '#aad9ee',
          300: '#72bde2',
          400: '#3a9dcb',
          500: '#1585b0',
          600: '#0d789e', // ← brand teal
          700: '#0a5e7d',
          800: '#08445c',
          900: '#052c3c', // ← headlines / dark text
          950: '#021520', // ← hero backgrounds
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
