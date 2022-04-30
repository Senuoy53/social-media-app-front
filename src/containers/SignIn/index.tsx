import { useState } from "react";

import { Link } from "react-router-dom";
import SignInWrapper from "./SignInWrapper";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ValuesType } from "./types";
import Layout from "../../components/Layout";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signin, authenticate } from "../../apiCall/auth";
import { useDispatch } from "react-redux";
import { requestSignin } from "./actions";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    error: "",
    signinSuccess: false,
    verificationError: false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<ValuesType>({
    email: "",
    password: "",
  });

  // useNavigate
  const history = useNavigate();
  // useDispatch
  const disptach = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      error: "",
      verificationError: false,
      [name]: value,
    });
  };

  const handleClickShowPassword = (e: any) => {
    setShowPassword(!showPassword);
  };

  //   ValidateForm Funtion
  const validateForm = (values: ValuesType) => {
    const errors: any = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex = /^[^\s@]+@+emeal.nttdata.com$/i;
    const regexb = /^[^\s@]+@+nttdata.com$/i;
    const regexc = /^[^\s@]+@+everis.nttdata.com$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !regex.test(values.email) &&
      !regexb.test(values.email) &&
      !regexc.test(values.email)
    ) {
      errors.email = "This is not a valid email format!!!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 7 characters";
    }

    return errors;
  };

  // Button HandleClick
  const clickSignin = (e: any) => {
    //  to stop loading the page
    e.preventDefault();

    setFormErrors(validateForm(formValues));
    const { email, password } = validateForm(formValues);

    if (email || password) {
      return;
      //toast.warn("Veuillez remplir tous les champs");
    } else {
      disptach(requestSignin());

      setFormValues({ ...formValues, error: "", verificationError: false });

      // signin({ email: formValues.email, password: formValues.password }).then(
      //   (data) => {
      //     if (data.error) {
      //       if (data.error == "Please verify user") {
      //         setFormValues({
      //           ...formValues,
      //           signinSuccess: false,
      //           verificationError: true,
      //         });
      //         return;
      //       }
      //       setFormValues({
      //         ...formValues,
      //         error: data.error,
      //         signinSuccess: false,
      //       });
      //       console.log(formValues.error);
      //       return "";
      //     } else {
      //       if (data.accessToken) {
      //         authenticate(data, () => {
      //           setFormValues({
      //             ...formValues,
      //             fname: data.fname,
      //             lname: data.lname,
      //             email: data.email,
      //             error: "",
      //             signinSuccess: true,
      //           });
      //         });
      //         history("/");
      //       }
      //     }
      //   }
      // );
    }
  };
  return (
    <Layout subtitle="Sign In">
      {/* Form */}
      <SignInWrapper>
        <h3 className="noteMessage">
          Please login with your <span id="red">nttdata email</span>
        </h3>
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
            {formValues.error && <p className="errors">{formValues.error}</p>}
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
            {formValues.verificationError && (
              <Alert sx={{ mt: 2 }} severity="warning">
                Please verify your email
              </Alert>
            )}
          </div>
        </div>
        {/* <button className="btn">Sign In</button> */}
        <Button variant="contained" className="btn" onClick={clickSignin}>
          Sign In{" "}
        </Button>
        <p className="messageInfo">
          Don't Have An Account? <Link to="/signup">Create One</Link>
        </p>
        <p className="messageInfo">
          Forgotten Password? <Link to="#">Reset It</Link>
        </p>
        {/* </form> */}
      </SignInWrapper>
    </Layout>
  );
};

export default SignIn;
