export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Steel/Industrial palette
        steel: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        // Deep Blue accent
        deepBlue: {
          50: '#eff6ff',
          500: '#0369a1',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Safety Orange accent
        safetyOrange: '#ff6b35',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.1' }],
        heading: ['2.25rem', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
