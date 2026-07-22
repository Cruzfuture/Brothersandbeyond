/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#C8102E',
          50: '#FEE7EA',
          100: '#FDC3C9',
          200: '#FA9BA8',
          300: '#F56E85',
          400: '#ED4664',
          500: '#E4274B',
          600: '#D21A3E',
          700: '#C8102E',
          800: '#A80D26',
          900: '#8A0E22',
        },
        emerald: {
          DEFAULT: '#006A4E',
          50: '#E6F5F0',
          100: '#CCEAE1',
          200: '#99D5C3',
          300: '#66BFA5',
          400: '#33A987',
          500: '#009369',
          600: '#006A4E',
          700: '#00543E',
          800: '#003D2E',
          900: '#00271E',
        },
        slate: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
