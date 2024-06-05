/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansMedium: "Sans_Medium",
        sansLight: "Sans_Light",
        Bank: "Bank",
      },
    },
  },
  plugins: [],
};
