/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#357dcf",
      },
      backgroundColor: {
        primary: "#357dcf",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
