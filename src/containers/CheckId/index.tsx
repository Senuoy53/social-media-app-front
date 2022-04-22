import { Link } from "react-router-dom";
import whiteLogo from "../../assets/img/logo-nttdata-blue.png";
import BgImage from "../../assets/img/squares-white.jpg";
import BgImageSmall from "../../assets/img/squares-white-small.jpg";

import { Button, TextField } from "@mui/material";
import CheckIdWrapper from "./CheckIdrapper";

const CheckId = ({ value, error, onChange, onClick }: CheckIdProps) => {
  return (
    <CheckIdWrapper>
      <div className="left">
        <img src={BgImage} className="bigimagebg" />
      </div>

      {/* Right Side */}
      <div className="right">
        <img src={BgImageSmall} className="smallimagebg" />
        <img src={whiteLogo} className="logo" />
        <h2 className="title">Internal Network</h2>
        <h3 className="subtitle">Sign Up</h3>

        {/* Form */}
        <form>
          <div className="input-box">
            <div className="input-container">
              <TextField
                id="outlined-basic"
                label="User ID"
                variant="outlined"
                className="input"
                name="userid"
                value={value}
                onChange={onChange}
              />
              {error && <p className="errors">{error}</p>}
            </div>
          </div>

          <Button variant="contained" className="btn" onClick={onClick}>
            Check user ID
          </Button>
          <p className="messageInfo">
            Already Signed Up? <Link to="#">Login Now</Link>
          </p>
        </form>
      </div>
    </CheckIdWrapper>
  );
};

export default CheckId;
