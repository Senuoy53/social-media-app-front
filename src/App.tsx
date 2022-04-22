import Router from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global-styles";
import { theme } from "./styles/global-styles";


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
