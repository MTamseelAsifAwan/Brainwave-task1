/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-to-r': 'linear-gradient(to right, #a78bfa, #ec4899, #f43f5e)',
        'custom-gradient-to-b': 'linear-gradient(to bottom, #a78bfa, #ec4899, #f43f5e)',
        'custom-gradient-to-l': 'linear-gradient(to left, #a78bfa, #ec4899, #f43f5e)',
        'custom-gradient-to-t': 'linear-gradient(to top, #a78bfa, #ec4899, #f43f5e)',
        'custom-gradient-to-br': 'linear-gradient(to bottom right, #a78bfa, #ec4899, #f43f5e)',
      },
    },
  },
  plugins: [],
}