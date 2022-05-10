import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;   
}




/* stop scrolling for the main page */


html::-webkit-scrollbar {
 width: 0.8rem;
}

/* html::-webkit-scrollbar-track {
 background-color: #f3f3f3;
} */


html::-webkit-scrollbar-thumb {
 background-color: #121A38;
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
