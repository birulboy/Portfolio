/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "title":"#79CFFF",
        "text":"#D1D1D1"
      },
      fontFamily: {
        fredoka: ['Fredoka One', 'sans-serif'],
        lora: ['Lora', 'serif'],
        sansita: ['Sansita One', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
