/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0' },
        },
      },
      animation: {
        scroll: 'scroll 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
