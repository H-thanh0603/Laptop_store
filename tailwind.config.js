/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { 50: '#EFF6FF', 100: '#DBEAFE', 500: '#0B5FFF', 600: '#074ED8', 700: '#073EAA' },
        sale: '#EF233C', ink: '#0B1220', surface: '#F5F7FB'
      },
      boxShadow: { soft: '0 12px 40px rgba(15, 23, 42, 0.08)', lift: '0 20px 60px rgba(15, 23, 42, 0.16)' }
    },
  },
  plugins: [],
};
