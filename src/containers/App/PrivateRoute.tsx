import { Navigate } from "react-router";
//import {isAuthenticated} from "./apiCall/auth"
import { useState, useEffect } from "react";
import { BACK_URL } from "../../variables";

const PrivateRoute = ({ children }: any) => {
  const [auth, setAuth] = useState(false);
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      let jwt = localStorage.getItem("jwt");
      let token = JSON.parse(jwt!).accessToken;
      fetch(`${BACK_URL}/verifytoken`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(JSON.stringify(json));
          if (json.success) {
            setAuth(true);
          }
        })
        .catch((err) => {
          setAuth(false);
          localStorage.removeItem("jwt");
        })
        .then(() => setIsTokenValidated(true));
    } else {
      setIsTokenValidated(true); // in case there is no token
    }
  }, []);
  if (!isTokenValidated) return <h1>loading</h1>;
  return auth ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
