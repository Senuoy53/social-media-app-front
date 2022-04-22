import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Poppins', sans-serif; */   
}
  body {
    /* font-family: Open-Sans, Helvetica, Sans-Serif; */
  }
`;

// Global colors
export const theme = {
  colors: {
    White: "#fff",
    Black: "#000",
    BlueBg: "#121A38",
    LightBlueBg: "#7493CA",
    ButtonColor1: "#2672EC",
    GrayColor: "#7E7979",
    ErrorColor: "#d8000c",
  },
};

export default GlobalStyle;
