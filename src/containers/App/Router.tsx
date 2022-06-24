import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountSecurityPage from "../../pages/AccountSecurityPage";
import GeneralAccountPage from "../../pages/GeneralAccountPage";
import Home from "../../pages/Home";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import SignUp from "../SignUp";

import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/generalaccountpage"
          element={
            <PrivateRoute>
              <GeneralAccountPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/accountsecuritypage"
          element={
            <PrivateRoute>
              <AccountSecurityPage />
            </PrivateRoute>
          }
        />
        {/* <Route path="/" element={<SignInPage />} /> */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
