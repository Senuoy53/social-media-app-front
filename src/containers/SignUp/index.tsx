import { useState } from "react";

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
import SignUpWrapper from "./SignUpWrapper";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Password confirmation error
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout";

import {
  SubTitle,
  FnameFields,
  LnameFields,
  EmailFields,
  SignupSuccessMessage,
  InputLabels,
  PassworFields,
  ConPassworFields,
  FnameRequires,
  LnameRequirers,
  PasswordRequires,
  ConPasswordRequires,
  ValidatePassworError,
} from "./constants";
import { MessageInfo } from "../../utils/constants";
import { outlineType } from "../../utils/app-utils";
import MessageInfoComp from "../../components/MessageInfoComp";
import { SignUpProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { requestSignUp } from "./actions";
import {
  makeSelectErrorMessage,
  makeSelectSignUpSuccess,
  makeSelectUser,
} from "./selectors";
import { createStructuredSelector } from "reselect";

// SignUp selectors
const signUpState = createStructuredSelector({
  errorMessage: makeSelectErrorMessage(),
  signUpSuccess: makeSelectSignUpSuccess(),
  User: makeSelectUser(),
});

const SignUp = ({
  checkedId,
  checkedFname,
  checkedLname,
  checkedEmail,
}: SignUpProps) => {
  const [values, setValues] = useState({
    id: checkedId,
  });

  const { id } = values;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // useDispatch
  const dispatch = useDispatch();
  // Selectors
  const { errorMessage, signUpSuccess, User } = useSelector(signUpState);

  // Password confirmation error
  // Handleform events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // Password confirmation error
  // check password event
  const password = watch("password");

  // handleClickShowPassword
  const handleClickShowPassword = (e: any) => {
    setShowPassword(!showPassword);
  };

  // handleClickShowConfirmPassword
  const handleClickShowConfirmPassword = (e: any) => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  //Add user to database
  // clickSignup
  const clickSignup = (data: any) => {
    dispatch(
      requestSignUp({
        _id: checkedId,
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <Layout subtitle={SubTitle.SIGN_UP}>
      {/* Form */}
      <SignUpWrapper onSubmit={handleSubmit(clickSignup)}>
        <div className="input-box">
          {/* Fname */}
          <div className="input-container">
            <TextField
              {...FnameFields}
              {...register("fname", {
                value: checkedFname,
                ...FnameRequires,
              })}
            />
            {errors.fname && <p className="errors">{errors.fname.message}</p>}
          </div>
          {/* Lname */}
          <div className="input-container">
            <TextField
              {...LnameFields}
              {...register("lname", {
                value: checkedLname,
                ...LnameRequirers,
              })}
            />
            {errors.lname && <p className="errors">{errors.lname.message}</p>}
          </div>
          {/* Email */}
          <div className="input-container">
            <TextField
              {...EmailFields}
              disabled
              {...register("email", {
                value: checkedEmail,
              })}
            />
            {errorMessage && <p className="errors">{errorMessage}</p>}
          </div>
          {/* Password */}
          <div className="input-container">
            <FormControl variant="outlined" className="input" size="small">
              <InputLabel htmlFor="password">{InputLabels.PASSWORD}</InputLabel>
              <OutlinedInput
                {...PassworFields}
                type={outlineType(showPassword)}
                {...register("password", {
                  ...PasswordRequires,
                })}
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

            {errors.password && (
              <p className="errors">{errors.password.message}</p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="input-container">
            <FormControl variant="outlined" className="input" size="small">
              <InputLabel htmlFor="password">
                {InputLabels.CONFIRM_PASSWORD}
              </InputLabel>
              <OutlinedInput
                {...ConPassworFields}
                type={outlineType(showConfirmPassword)}
                {...register("confirmPassword", {
                  ...ConPasswordRequires,
                  validate: (value) =>
                    value === password || ValidatePassworError.MESSAGE,
                })}
                onPaste={(e) => {
                  e.preventDefault();
                  return false;
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {errors.confirmPassword && (
              <p className="errors">{errors.confirmPassword.message}</p>
            )}
            {signUpSuccess && (
              <Alert sx={{ mt: 2 }} severity="success">
                {SignupSuccessMessage.Message}
              </Alert>
            )}
          </div>
        </div>

        <Button variant="contained" className="btn" type="submit">
          {ButtonField.SIGN_UP}
        </Button>

        <MessageInfoComp
          part1={MessageInfo.ALREADY_SIGN_UP}
          to="/signin"
          part2={MessageInfo.LOGIN_NOW}
        />
      </SignUpWrapper>
    </Layout>
  );
};

export default SignUp;
