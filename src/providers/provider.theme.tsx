import React from "react";
import { ThemeProvider } from "styled-components";

const ThemesProvider: React.FC = ({ children }) => {
  const theme = () => {
    return {
      breakpoints: ["550px", "770px", "990px", "1280px", "1600px"],
      space: [0, 4, 8, 16, 32, 64],
      // margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
      fontSizes: [12, 14, 16, 20, 24, 32],
      // font-size
      colors: {
        lightpurple: "#AEB1FF",
        darkpurple: "#2B0945",
        yellow: "#FFEC87",
        lightgray: "#898989",
        gray: "#28292B",
        darkgray: "#222222",
        black: "#171717",
      },
      // color, background-color, border-color
      fonts: [],
      // font-family
      fontWeights: [500, 600, 700, 800],
      // font-weight
      lineHeights: [12, 14, 16, 20, 24, 32],
      // line-height
      letterSpacings: [],
      // letter-spacing
      sizes: { mainHeader: "80px" },
      // width, height, min-width, max-width, min-height, max-height
      borders: [],
      // border, border-top, border-right, border-bottom, border-left
      borderWidths: [],
      // border-width
      borderStyles: [],
      // border-style
      radii: [],
      // border-radius
      shadows: [],
      // box-shadow, text-shadow
      zIndices: [],
      // z-index
      // -------------------- user --------------------
      // transforms: ["translateX(50%)", "translateX(50%)", "translateX(50%)", "unset"],
      // gradients: {
      //   main: "linear-gradient(180deg, #44C098 0%, #10956D 100%)",
      // },
    };
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemesProvider;
