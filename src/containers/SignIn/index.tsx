import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSignin,
  requestSigninError,
  setVerificationError,
} from "./actions";
import { createStructuredSelector } from "reselect";
import {
  makeSelectErrorMessage,
  makeSelectVerificationError,
} from "./selectors";

import {
  NoteMessage,
  EmailFields,
  PasswordFields,
  PasswordLabel,
  VerificationError,
  MessageInfo,
  SubTitle,
} from "./constants";

import { outlineType } from "../../utils/app-utils";
import MessageInfoComp from "../../components/MessageInfoComp";

const signInState = createStructuredSelector({
  errorMessage: makeSelectErrorMessage(),
  verificationError: makeSelectVerificationError(),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<ValuesType>(initialValues);

  // useNavigate
  const history = useNavigate();
  // useDispatch
  const dispatch = useDispatch();
  // Selectors
  const { errorMessage, verificationError } = useSelector(signInState);

  // useEffect to empty errors
  useEffect(() => {
    dispatch(requestSigninError(""));
  }, []);

  // Handle change function
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,

      [name]: value,
    });
  };

  // handleClickShowPassword
  const handleClickShowPassword = (e: any) => {
    setShowPassword(!showPassword);
  };

  //   ValidateForm Funtion
  const validateForm = (values: ValuesType) => {
    const errors: any = {};
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
      dispatch(requestSigninError(""));
      // dispatch(setErrorMessage(""));
      dispatch(setVerificationError(false));
    } else {
      dispatch(
        requestSignin({
          email: formValues.email,
          password: formValues.password,
          history: history,
        })
      );
    }
  };

  return (
    <Layout subtitle={SubTitle.SIGN_IN}>
      {/* Form */}
      <SignInWrapper>
        <h3 className="noteMessage">
          {NoteMessage.PART_1} <span id="red">{NoteMessage.PART_2}</span>
        </h3>
        <div className="input-box">
          <div className="input-container">
            <TextField
              {...EmailFields}
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && <p className="errors">{formErrors.email}</p>}
            {errorMessage && <p className="errors">{errorMessage}</p>}
          </div>

          <div className="input-container">
            <FormControl variant="outlined" className="input">
              <InputLabel htmlFor="password">
                {PasswordLabel.Password}
              </InputLabel>
              <OutlinedInput
                {...PasswordFields}
                type={outlineType(showPassword)}
                value={formValues.password}
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
              />
            </FormControl>

            {!verificationError && formErrors.password && (
              <p className="errors">{formErrors.password}</p>
            )}
            {verificationError && (
              <Alert sx={{ mt: 2 }} severity="warning">
                {VerificationError.MESSAGE}
              </Alert>
            )}
          </div>
        </div>
        {/* <button className="btn">Sign In</button> */}
        <Button variant="contained" className="btn" onClick={clickSignin}>
          {ButtonField.SIGN_IN}
        </Button>

        <MessageInfoComp
          part1={MessageInfo.DONT_HAVE_ACCOUNT}
          to="/signup"
          part2={MessageInfo.CREATE_ONE}
        />
        {/* </form> */}
      </SignInWrapper>
    </Layout>
  );
};

export default SignIn;
