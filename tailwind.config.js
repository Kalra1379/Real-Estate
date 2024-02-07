module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700_3f: "#ffffff3f", A700: "#ffffff" },
        gray: {
          100: "#f3f3f3",
          200: "#ececec",
          400: "#b1b1b1",
          500: "#a7a7a7",
        },
        deep_orange: { A200: "#ff5a3c", A200_33: "#ff5a3b33" },
        blue_gray: { 100: "#d9d9d9", 900: "#0b2c3d" },
        red: { 100: "#f3cece", 500: "#ff3030", "500_99": "#ff2f2f99" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_26": "#00000026",
          "900_59": "#00000059",
        },
      },
      fontFamily: {
        nunito: "Nunito",
        timesnewroman: "Times New Roman",
        roboto: "Roboto",
      },
      boxShadow: {
        bs1: "0px 6px  10px 0px #0000003f",
        bs: "0px 4px  13px 1px #00000026",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
