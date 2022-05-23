import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;   
    
}







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
    Blue1: "#202DB5",
    LightBlueBg: "#7493CA",
    HoverBlueBg: "#2a314c",
    ButtonColor1: "#2672EC",
    GrayColor: "#7E7979",
    LightGrayColor: "rgba(0, 0, 0, 0.6)",
    ErrorColor: "#d8000c",
  },
};

export default GlobalStyle;
