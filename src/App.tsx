import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SignUpPage from "./pages/SignUpPage";
import GlobalStyle from "./styles/global-styles";
import { theme } from "./styles/global-styles";
import SignInPage from "./pages/SignInPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
        {/* <Router>
          <Switch>
            <Route exact path="/signin">
              <SignInPage />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/">
              <SignInPage />
            </Route>
          </Switch>
        </Router> */}
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
