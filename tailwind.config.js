module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "primary-red": "#890F0D",
      "secondary-red": "#8C0000",
      "dark-pink": "#C74B50",
      "primary-yellow": "#FFBE0F",
      "primary-white": "#fff",
      "primary-gray": "#808080",
      "aqua-green": "#83BD75",
      "lipstick-red": "#F32424",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    fontFamily: {
      heading: ["EB Garamond", "sans-serif"],
      simple: ["Lato", "serif"],
    },
  },
  plugins: [],
};
