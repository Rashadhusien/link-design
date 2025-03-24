/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      padding: {
        DEFAULT: "0.5rem",
        sm: "1.5rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      primary: "#0052da",
      darkBlue: "#253041",
      white: "#fff",
      whitep: "#e5e3e3",
      slate: "#f8fafc",
      black: "#000000",
      gray: "#253041",
      grayHover: "#3b4554",
      grayp: "#4c5165",
      bgtestemonial: "#f5f8fe",
      inputgray: "#384559",
      btnhover: "#0041ac",
      PaleBlue: "#e4f0ff",
      red: {
        500: "#f44336",
        600: "#d32f2f",
      },
    },
  },
  plugins: [],
};
