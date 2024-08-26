/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF4F",
        secondary: "#263238",
        info: "#2194F3",
        success: "#2E7D31",
        warning: "#FBC02D",
        error: "#E53835",
        colorsShade: {
          shade1: "#43A046",
          shade2: "#388E3B",
          shade3: "#237D31",
          shade4: "#1B5E1F",
          shade5: "#103E13",
        },
        colorsTint: {
          tint1: "#66BB69",
          tint2: "#81C784",
          tint3: "#A5D6A7",
          tint4: "#C8E6C9",
          tint5: "#E8F5E9",
        },
        neutral: {
          Black: "#263238",
          DarkGray: "#4D4D4D",
          Gray: "#717171",
          LightGray: "##89939E",
          neutralGray: "#ABBED1",
          silver: "#F5F7FA",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        fontFAm: "Inter",
      },
      fontSize: {
        heading1: "64px",
        heading2: "36px",
        heading3: "28px",
        heading4: "20px",
        regular: {
          body1: "18px",
          body2: "16px",
          body3: "14px",
          body4: "12px",
        },
        medium: {
          body1: "18px",
          body2: "16px",
          body3: "14px",
          body4: "12px",
        },
      },
    },
  },
  plugins: [],
};
