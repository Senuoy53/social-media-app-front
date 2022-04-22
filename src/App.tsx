import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SignUpPage from "./pages/SignUpPage";
import GlobalStyle from "./styles/global-styles";
import { theme } from "./styles/global-styles";
import Signup from "./test/Signup";
import SignUpPageTest from "./test";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/test" element={<SignUpPageTest />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
