/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        phos: {
          50:  '#fdf6ee',
          100: '#faebd6',
          200: '#f4d3a8',
          300: '#ecb472',
          400: '#e4913b',
          500: '#dc741a',
          600: '#ce5c10',
          700: '#ab4510',
          800: '#893714',
          900: '#6f2f13',
          950: '#3c1507',
        },
        ink: {
          50:  '#f6f6f7',
          100: '#e1e3e6',
          200: '#c3c7ce',
          300: '#9da3af',
          400: '#788090',
          500: '#5e6676',
          600: '#4a5160',
          700: '#3d4250',
          800: '#343944',
          900: '#1a1d26',
          950: '#0e1018',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
