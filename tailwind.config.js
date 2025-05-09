/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7E5F',
        ivory: {
          medium: '#F7F5F2',
        },
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
} 