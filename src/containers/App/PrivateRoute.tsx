import { Navigate } from "react-router";
import { useState, useEffect } from "react";
import { axiosAuthApi } from "../../utils/request";
import LoadingComponent from "../../components/LoadingComponent";
import "./index.css";

const PrivateRoute = ({ children }: any) => {
  const [auth, setAuth] = useState(false);
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      let jwt = localStorage.getItem("jwt");
      let token = JSON.parse(jwt!).accessToken;

      axiosAuthApi({
        method: "GET",
        url: `/verifytoken`,
        headers: {
          Accept: "application/json",
          authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          // console.log("res", res);
          if (res.data.success) {
            setIsTokenValidated(true);
            setAuth(true);
          }
        })
        .catch((err) => {
          setIsTokenValidated(true); // in case there is no token
          console.log("err", err.response.data.error);
          setAuth(false);
          localStorage.removeItem("jwt");
        });
    } else {
      setIsTokenValidated(true); // in case there is no token
    }
  }, []);

  if (!isTokenValidated)
    return (
      <LoadingComponent
        className="LoadingHome"
        width="100px"
        height="100px"
        scale="1"
      />
    );
  return auth ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
