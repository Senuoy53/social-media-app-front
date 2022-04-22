import { Link } from "react-router-dom";
import whiteLogo from "../assets/img/logo-nttdata-blue.png";
import BgImage from "../assets/img/squares-white.jpg";
import BgImageSmall from "../assets/img/squares-white-small.jpg";

import { Button, TextField } from "@mui/material";
import CheckIdWrapper from "../containers/CheckId/CheckIdrapper";

const Layout = ({title,children}:any) => (
    <CheckIdWrapper>
    <div className="left">
      <img src={BgImage} className="bigimagebg" />
    </div>

    {/* Right Side */}
    <div className="right">
      <img src={BgImageSmall} className="smallimagebg" />
      <img src={whiteLogo} className="logo" />
      <h2 className="title">Internal Network</h2>
      <h3 className="subtitle">{title}</h3>

      {/* Form */}
        {children}
    </div>
  </CheckIdWrapper>
);

export default Layout;