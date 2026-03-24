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
        // Dark anchor — built around #0C789E (brand teal)
        ink: {
          50:  '#eef8fc',
          100: '#d5eef7',
          200: '#aadaee',
          300: '#72bfe2',
          400: '#35a0ce',
          500: '#1589b8',
          600: '#0C789E', // ← exact brand color (nav text, body text)
          700: '#095f7e',
          800: '#07475f',
          900: '#04303f',
          950: '#021a23', // ← hero backgrounds
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
