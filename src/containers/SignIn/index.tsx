import { useState } from "react";

import { Link } from "react-router-dom";
import SignInWrapper from "./SignInWrapper";
import whiteLogo from "../../assets/img/logo-nttdata-blue.png";
import BgImage from "../../assets/img/squares-white.jpg";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { ValuesType } from "./types";

const SignIn = () => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<ValuesType>({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClickShowPassword = (e: any) => {
    setShowPassword(!showPassword);
  };

  //   ValidateForm Funtion
  const validateForm = (values: ValuesType) => {
    const errors: any = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex = /^[^\s@]+@[^\s@]+\.emeal.nttdata[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Veuillez saisir un Email";
    } else if (!regex.test(values.email)) {
      errors.email = "Ce n'est pas un format d'email valide !!!";
    }

    if (!values.password) {
      errors.password = "Veuillez saisir un mot de passe";
    } else if (values.password.length < 6) {
      errors.password = "Mot de passe doit avoir plus de 5 caractères";
    }

    return errors;
  };

  // Button HandleClick
  const handleClick = (e: any) => {
    //  to stop loading the page
    e.preventDefault();

    setFormErrors(validateForm(formValues));
    const { email, password } = validateForm(formValues);

    if (email || password) {
      //   toast.warn("Veuillez remplir tous les champs");
    } else {
    }
  };
  return (
    <SignInWrapper>
      <div className="left">
        <img src={BgImage} />
      </div>

      <div className="right">
        <img src={whiteLogo} className="logo" />
        <h2 className="title">Internal Network</h2>
        <h3 className="subtitle">Sign In</h3>

        {/* Form */}
        <form>
          <div className="input-box">
            <div className="input-container">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="input"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && <p className="errors">{formErrors.email}</p>}
            </div>

            <div className="input-container">
              <FormControl variant="outlined" className="input">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formValues.password}
                  name="password"
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              {formErrors.password && (
                <p className="errors">{formErrors.password}</p>
              )}
            </div>
          </div>
          {/* <button className="btn">Sign In</button> */}
          <Button variant="contained" className="btn" onClick={handleClick}>
            Sign In{" "}
          </Button>
          <p className="messageInfo">
            Don't Have An Account? <Link to="#">Create One</Link>
          </p>
          <p className="messageInfo">
            Forgotten Password? <Link to="#">Reset It</Link>
          </p>
        </form>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
