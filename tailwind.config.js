/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        MainTitle: ['Rye', 'serif'],
        SubTitle: ['Quintessential', 'serif']
    }
    },
  },
  plugins: [require("daisyui")],
}

