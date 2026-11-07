/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F3EE',
        ink: '#111111',
        muted: '#6B6560',
        rule: '#E4DED6',
        accent: '#C45C26',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
