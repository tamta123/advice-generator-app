/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#CEE3E9",
        neon: "#53FFAA",
      },
    },
  },
  fontFamily: {
    antonio: ['"Manrope"'],
  },
  plugins: [],
};
