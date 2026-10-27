/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22c58e',
        'primary-dark': '#16a34a',
        secondary: '#f59e0b',
        muted: '#6b7280',
        border: 'rgba(226, 232, 240, 0.5)',
      },
    },
  },
  plugins: [],
};
