import { useState } from "react";

import { Link } from "react-router-dom";
import whiteLogo from "../../assets/img/logo-nttdata-blue.png";
import BgImage from "../../assets/img/squares-white.jpg";
import BgImageSmall from "../../assets/img/squares-white-small.jpg";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import SignUpWrapper from "./SignUpWrapper";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Password confirmation error
import { useForm } from "react-hook-form";

const SignUp = ({
  checkedId,
  checkedName,
  checkedSurname,
  checkedEmail,
}: SignUpProps) => {
  const API = "http://localhost:8000/api";

  const [values, setValues] = useState({
    id: checkedId,
    name: checkedName,
    surname: checkedSurname,
    email: checkedEmail,
    password: "",
    confirmPassword: "",
    error: "",
    checkIdSuccess: false,
    signupSuccess: false,
  });

  const {
    id,
    name,
    surname,
    email,
    password,
    confirmPassword,
    checkIdSuccess: CheckIdSuccess,
    error,
  } = values;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
  // handfle submit
  const onSubmit = (data: any) => alert(JSON.stringify(data));

  // Password confirmation error
  // check password event
  const ppassword = watch("password");
  console.log(ppassword);

  // handleClickShowPassword
  const handleClickShowPassword = (e: any) => {
    setShowPassword(!showPassword);
  };

  // handleClickShowConfirmPassword
  const handleClickShowConfirmPassword = (e: any) => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (val: any) => (event: any) => {
    console.log(event.target.value);
    setValues({ ...values, error: "", [val]: event.target.value });
  };

  // Sign Up API
  const signup = (user: any) => {
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Add user to database
  const clickSignup = (event: any) => {
    event.preventDefault();
    // setValues({ ...values, signupSuccess: false });
    // signup({ id, name, email, password }).then((data) => {
    //   console.log(data);
    //   if (data.error) {
    //     setValues({ ...values, error: data.error, signupSuccess: false });
    //     return "";
    //   } else if (data.errors) {
    //     setValues({ ...values, error: data.errors, signupSuccess: false });
    //     return "";
    //   } else {
    //     setValues({
    //       ...values,
    //       name: "",
    //       surname: "",
    //       email: "",
    //       password: "",
    //       confirmPassword: "",
    //       error: "",
    //       signupSuccess: true,
    //     });
    //   }
    // });
  };

  return (
    <SignUpWrapper>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            {/* Name */}
            <div className="input-container">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className="input"
                // name="name"
                // value={name}
                // onChange={handleChange("name")}
                size="small"
                {...register("name", {
                  value: checkedName,
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "Minimum require length is 4",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum require length is 20",
                  },
                })}
              />
              {errors.name && <p className="errors">{errors.name.message}</p>}
              {/* {error && <p className="errors">{error}</p>} */}
            </div>
            {/* Surname */}
            <div className="input-container">
              <TextField
                id="outlined-basic"
                label="Surname"
                variant="outlined"
                className="input"
                // name="surname"
                // value={surname}
                // onChange={handleChange("surname")}
                size="small"
                {...register("surname", {
                  value: checkedSurname,
                  required: "Surname is required",
                  minLength: {
                    value: 4,
                    message: "Minimum require length is 4",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum require length is 20",
                  },
                })}
              />
              {errors.surname && (
                <p className="errors">{errors.surname.message}</p>
              )}
              {/* {error && <p className="errors">{error}</p>} */}
            </div>
            {/* Email */}
            <div className="input-container">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="input"
                name="email"
                value={checkedEmail}
                disabled
                size="small"
              />
            </div>
            {/* Password */}
            <div className="input-container">
              <FormControl variant="outlined" className="input" size="small">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  // value={password}
                  // name="password"
                  // onChange={handleChange("password")}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                      message:
                        "Password should include at least one uppercase, one numeric value and one special character",
                    },
                    minLength: {
                      value: 8,
                      message: "Minimum require length is 8",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum require length is 20",
                    },
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
                  label="Password"
                />
              </FormControl>

              {errors.password && (
                <p className="errors">{errors.password.message}</p>
              )}

              {/* 
              {formErrors.password && (
                <p className="errors">{formErrors.password}</p>
              )} */}
            </div>
            {/* Confirm Password */}
            <div className="input-container">
              <FormControl variant="outlined" className="input" size="small">
                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                <OutlinedInput
                  type={showConfirmPassword ? "text" : "password"}
                  // value={confirmPassword}
                  // onChange={handleChange("confirmPassword")}
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === ppassword || "The passwords do not match",
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
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
              {errors.confirmPassword && (
                <p className="errors">{errors.confirmPassword.message}</p>
              )}
              {/* {formErrors.password && (
                <p className="errors">{formErrors.password}</p>
              )} */}
            </div>
          </div>

          <Button variant="contained" className="btn" type="submit">
            Sign Up
          </Button>
          <p className="messageInfo">
            Already Signed Up? <Link to="#">Login Now</Link>
          </p>
        </form>
      </div>
    </SignUpWrapper>
  );
};

export default SignUp;
