import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import CheckIdWrapper from "./CheckIdrapper";
import Layout from "../../components/Layout";

const CheckId = ({ value, error, onChange, onClick }: CheckIdProps) => {
  return (
    <Layout subtitle="Sign Up">
      {/* Form */}
      <CheckIdWrapper>
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
          Already Signed Up? <Link to="/signin">Login Now</Link>
        </p>
      </CheckIdWrapper>
    </Layout>
  );
};

export default CheckId;
