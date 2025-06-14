/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",     // for Vite/React
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",   // for Next.js
    "./app/**/*.{js,ts,jsx,tsx}",     // for Next.js App Router
    "./public/index.html",            // for CRA or HTML files
  ],
  theme: {
    extend: {
      // Optional: You can extend fonts, spacing, colors, etc.
      fontFamily: {
        grotesk: ["Founders_Grotesk_X_Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
}
