/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: "#fcfcea",
          100: "#f9f8c8",
          200: "#f5f093",
          300: "#eee056",
          400: "#ead33e",
          500: "#d8b71a",
          600: "#ba8f14",
          700: "#956913",
          800: "#7b5318",
          900: "#69441a",
          950: "#3d240b",
        },
      },
    },
  },
  plugins: [],
};
