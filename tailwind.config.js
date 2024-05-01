/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1330px',
      },
    },
  },
  plugins: [],
}

