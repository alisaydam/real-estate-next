/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "650px",
      md: "800px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        clrText: "var(--color-text-primary)",
        clrBG: "var(--color-bg-primary)",
        clrSecondaryText: "var(--color-text-secondary)",
        clrGradient: "var(--color-gradient-green)",
        btnGreen: "#45FF14",
        txtGreen: "#176030",
      },
      boxShadow: {
        xl: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        "2xl": "10px",
      },
    },
    minWidth: {
      big: "150px",
      small: "100px",
    },
  },
  plugins: [],
};
