import { useState } from "react";

import { Link, useNavigate} from "react-router-dom";

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
import Layout from "../../components/Layout";

const SignUp = ({
  checkedId,
  checkedName,
  checkedSurname,
  checkedEmail,
}: SignUpProps) => {
  const API = "http://localhost:8000/api";
  const history = useNavigate();


  const [values, setValues] = useState({
    id: checkedId,
    error: "",
    signupSuccess: false,
  });

  const { id, error, signupSuccess } = values;

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
  // clickSignup
  const clickSignup = (data: any) => {
    // alert(JSON.stringify(data));

    setValues({ ...values, signupSuccess: false });
    signup({
      _id: id,
      name: data.name,
      email: data.email,
      password: data.password,
    }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, signupSuccess: false });
        return "";
      } else if (data.errors) {
        setValues({ ...values, error: data.errors, signupSuccess: false });
        return "";
      } else {
        setValues({
          ...values,
          error: "",
          signupSuccess: true,
        });
        history("/signin");
      }
    });
  };

  return (
    <Layout subtitle="Sign Up">
      {/* Form */}
      <SignUpWrapper onSubmit={handleSubmit(clickSignup)}>
        <div className="input-box">
          {/* Name */}
          <div className="input-container">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              className="input"
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
          </div>
          {/* Surname */}
          <div className="input-container">
            <TextField
              id="surname"
              label="Surname"
              variant="outlined"
              className="input"
              size="small"
              {...register("surname", {
                value: checkedSurname,
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
          </div>
          {/* Email */}
          <div className="input-container">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className="input"
              disabled
              size="small"
              {...register("email", {
                value: checkedEmail,
              })}
            />
            {error && <p className="errors">{error}</p>}
          </div>
          {/* Password */}
          <div className="input-container">
            <FormControl variant="outlined" className="input" size="small">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
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
          </div>
          {/* Confirm Password */}
          <div className="input-container">
            <FormControl variant="outlined" className="input" size="small">
              <InputLabel htmlFor="password">Confirm Password</InputLabel>
              <OutlinedInput
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "The passwords do not match",
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
                label="Confirm Password"
              />
            </FormControl>
            {errors.confirmPassword && (
              <p className="errors">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        <Button variant="contained" className="btn" type="submit">
          Sign Up
        </Button>
        <p className="messageInfo">
          Already Signed Up? <Link to="#">Login Now</Link>
        </p>
      </SignUpWrapper>
    </Layout>
  );
};

export default SignUp;
