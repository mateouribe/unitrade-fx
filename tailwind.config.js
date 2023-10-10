/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#313131",
        white: "#F8FBF8",
        gray: "#E0E0E0",
        main: "#00FFD1",
        axi: "#FF404D",
        pelican: "#1A7CF8",
        mql5: "#2C6BCA",
      },
      // fontFamily: {
      //   nHasGrotexk: ["NHaasGroteskTXPro", "sans-serif"],
      //   swearDisplay: ["SwearDisplay", "serif"],
      // },
      padding: {
        mobile: "20px",
        tablet: "30px",
        desktop: "50px",
      },
      fontSize: {
        titleDesktop: "48px",
        titleTablet: "38px",
        titleMobile: "28px",
        subtitleDesktop: "35px",
        subtitleTablet: "25px",
        subtitleMobile: "20px",
        text: "16px",
        sm: "14px",
        xsm: "12px",
      },
      spacing: {
        5: "5px",
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        100: "100px",
        view: "100vh",
      },
      screens: {
        lg: "1180px",
      },
      borderRadius: {
        10: "10px",
        20: "20px",
        30: "30px",
        50: "50px",
      },
    },
  },
  plugins: [],
};
