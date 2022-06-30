/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['bg-[#0D2C99]', 'bg-gradient-to-b from-[#2483C5] to-[#29B473]', 'bg-[#221E3B]'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Mulish, sans-serif',
      },
    },
  },
  plugins: [],
}
