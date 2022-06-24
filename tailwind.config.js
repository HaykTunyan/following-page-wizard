const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Nunito Sans", "sans-serif"],
      body: ["Nunito Sans", "sans-serif"],
    },
    boxShadow: {
      alpha: "0px 0px 2px 0px #0000003D",
      beta: "0px 0px 4px 0px #0000001A",
      gamma: "0px 0px 4px -2px #011C2B",
    },
    extend: {
      colors: {
        primary: { DEFAULT: "#1E85FE" },

        paleAqua: { DEFAULT: "#B2BECC" },
        light: "#FAFBFD",
        dark: { DEFAULT: "#353638", light: "#555A69" },
      },
      screens: {
        xs: "300px",
        ...defaultTheme.screens,
        "2xl": "1440px",
        "3xl": "1536px",
      },
      minWidth: {
        "320px": "320px",
      },
      maxWidth: {
        "1360px": "1360px",
      },
      boxShadow: {
        base: "0px 0px 4px rgba(0, 0, 0, 0.24)",
      },
      spacing: {
        13: "52px",
        15: "60px",
        "128px": "128px",
        "244px": "244px",
        "350px": "350px",
        "405px": "405px",
        "450px": "450px",
        "655px": "655px",
        "728px": "728px",
        "740px": "740px",
        "916px": "916px",
        "1110px": "1110px",
        "1280px": "1280px",
        "1360px": "1360px",
      },

      borderWidth: {
        "1px": "1px",
      },
      borderRadius: {
        "3xl": "36px",
      },
    },
  },
  plugins: [],
};
