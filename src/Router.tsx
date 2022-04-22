import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Home from "./pages/Home";

const Router = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
        /* <Router>
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
        </Router> */
  );
};

export default Router;
