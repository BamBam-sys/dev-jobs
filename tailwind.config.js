/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      lightGrey: '#f4f6f8',
      grey: '#9daec2',
      darkGrey: '#6e8098',
      violet: '#5964E0',
      lightViolet: '#939BF4',
      veryDarkBlue: '#19202D',
      midnight: '#121721'
    },
    backgroundImage: {
      'header-bg': "url('/assets/desktop/bg-pattern-header.svg')"
    },
    extend: {
      boxShadow: {
        i: '0 0 10px 1200px rgb(0 0 0 / 70%)'
      }
    }
  },

  plugins: []
}
