/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        clrText: "var(--color-text-primary)",
        clrBG: "var(--color-bg-primary)",
        clrSecondary: "var(--color-text-secondary)",
        clrGradient: "var(--color-gradient-green)",
      },
    },
  },
  plugins: [],
};
