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
        SubTitle: ['Quintessential', 'serif'],
        NormalText: ['Quicksand','sans-serif'],
        SectionTitle: ['Lexend', 'sans-serif']
    }
    },
  },
  plugins: [require("daisyui")],
}

