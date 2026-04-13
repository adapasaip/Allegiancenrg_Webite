/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ede7e0',
          300: '#e0d5ca',
          400: '#c9b5a0',
          500: '#b39a85',
          600: '#a08574',
          700: '#8a7063',
          800: '#6f5a52',
          900: '#5a4844',
        },
        dark: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          950: '#0a0a0a',
        },
        gold: '#d4af37',
        cream: '#f5f1ed',
      },
      fontFamily: {
        serif: ['"Inria Serif"', 'serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
