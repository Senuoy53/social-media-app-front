import { useEffect, useState } from "react";

import {
  AccountSecurityTexts,
  ButtonFields,
  CurrentPasswordFields,
  currentPasswordRequires,
  MessageInfoCompTexts,
  NewPasswordFields,
  newPasswordRequires,
  ReTypePasswordFields,
  ReTypePasswordRequires,
  renewPasswordSuccessMessage,
  ValidateRenewPasswordError,
  ValidateReTypePasswordError,
} from "./constants";

import {
  requestRenewPassword,
  requestRenewPasswordError,
  setRenewPasswordSuccess,
} from "./actions";
import { useDispatch, useSelector } from "react-redux";

import {
  makeSelectErrorMessage,
  makeSelectRenewPasswordSuccess,
} from "./selectors";
import {
  getCurrentUserFromLocalStorage,
  outlineType,
} from "../../utils/app-utils";

import AccountSecuritySettingsWrapper from "./AccountSecuritySettingsWrapper";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import ErrorsCustom from "../../components/ErrorsCustom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import MessageInfoComp from "../../components/MessageInfoComp";
import { createStructuredSelector } from "reselect";
import AlertComponent from "../../components/AlertComponent";

const accountSecuritySettingsState = createStructuredSelector({
  renewPasswordSuccess: makeSelectRenewPasswordSuccess(),
  errorMessage: makeSelectErrorMessage(),
});

const AccountSecuritySettings = () => {
  // Handleform events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReTypePassword, setShowReTypePassword] = useState(false);

  // useDispatch
  const dispatch = useDispatch();

  // Selectors

  const { renewPasswordSuccess, errorMessage } = useSelector(
    accountSecuritySettingsState
  );

  let currentUser: any = "";
  // getCurrentUserFromLocalStorage function
  currentUser = getCurrentUserFromLocalStorage();

  // Password confirmation error
  // check password event
  const newPassword = watch("newPassword");
  const currentPassword = watch("currentPassword");

  // handleClickShowPassword
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // handleClickNewPassword
  const handleClickNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  // handleClickShowConfirmPassword
  const handleClickReTypePassword = () => {
    setShowReTypePassword(!showReTypePassword);
  };

  //   clickUpdatePassword
  const clickUpdatePassword = async (data: any) => {
    dispatch(
      requestRenewPassword({
        userId: currentUser._id,
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      })
    );
  };

  useEffect(() => {
    //  set RenewPasswordSuccess to false
    dispatch(setRenewPasswordSuccess(false));
    // set errorMessage to null
    dispatch(requestRenewPasswordError(""));
  }, []);

  return (
    <AccountSecuritySettingsWrapper>
      <div className="accountSecurityContainer">
        <h3 className="containerTitle">
          {AccountSecurityTexts.containerTitle}
        </h3>
        <div className="accountSecurityBox">
          <div className="asBox">
            <h4 className="asTitle">{AccountSecurityTexts.AsTitle}</h4>
            <form
              onSubmit={handleSubmit(clickUpdatePassword)}
              className="asForm"
            >
              <div className="input-container">
                {/* CurrentPassword */}
                <div className="input-box">
                  <label htmlFor="" className="labelText">
                    {AccountSecurityTexts.CurrentPassword}:
                  </label>
                  <div className="textField-box">
                    <FormControl
                      variant="outlined"
                      className="input"
                      size="small"
                    >
                      <InputLabel htmlFor="currentpassword">
                        {AccountSecurityTexts.CurrentPassword}
                      </InputLabel>
                      <OutlinedInput
                        {...CurrentPasswordFields}
                        type={outlineType(showPassword)}
                        {...register("currentPassword", {
                          ...currentPasswordRequires,
                        })}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    {errors.currentPassword && (
                      <ErrorsCustom>
                        {errors.currentPassword.message}
                      </ErrorsCustom>
                    )}
                  </div>
                </div>

                {/* NewPassword */}
                <div className="input-box">
                  <label htmlFor="" className="labelText">
                    {AccountSecurityTexts.NewPassword}:
                  </label>
                  <div className="textField-box">
                    <FormControl
                      variant="outlined"
                      className="input"
                      size="small"
                    >
                      <InputLabel htmlFor="newpassword">
                        {AccountSecurityTexts.NewPassword}
                      </InputLabel>
                      <OutlinedInput
                        {...NewPasswordFields}
                        type={outlineType(showNewPassword)}
                        {...register("newPassword", {
                          ...newPasswordRequires,
                          validate: (value) => {
                            if (value === currentPassword)
                              return ValidateRenewPasswordError.MESSAGE;
                          },
                        })}
                        onPaste={(e) => {
                          e.preventDefault();
                          return false;
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickNewPassword}
                              edge="end"
                            >
                              {showNewPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    {errors.newPassword && (
                      <ErrorsCustom>{errors.newPassword.message}</ErrorsCustom>
                    )}
                  </div>
                </div>

                {/* ReTypePassword */}
                <div className="input-box">
                  <label htmlFor="" className="labelText">
                    {AccountSecurityTexts.ReTypePassword}:
                  </label>
                  <div className="textField-box">
                    <FormControl
                      variant="outlined"
                      className="input"
                      size="small"
                    >
                      <InputLabel htmlFor="retypepassword">
                        {AccountSecurityTexts.ReTypePassword}
                      </InputLabel>
                      <OutlinedInput
                        {...ReTypePasswordFields}
                        type={outlineType(showReTypePassword)}
                        {...register("retypePassword", {
                          ...ReTypePasswordRequires,
                          validate: (value) =>
                            value === newPassword ||
                            ValidateReTypePasswordError.MESSAGE,
                        })}
                        onPaste={(e) => {
                          e.preventDefault();
                          return false;
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickReTypePassword}
                              edge="end"
                            >
                              {showReTypePassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    {errors.retypePassword && (
                      <ErrorsCustom>
                        {errors.retypePassword.message}
                      </ErrorsCustom>
                    )}
                  </div>
                </div>
              </div>

              <div className="button-container">
                {/* {loadingUser && <div className="loading"></div>} */}

                <Button
                  variant="contained"
                  className="btn-2 updateBtn"
                  type="submit"
                >
                  {ButtonFields.UPDATE_PASSWORD}
                </Button>
              </div>
              {!errors.currentPassword &&
                !errors.newPassword &&
                !errors.retypePassword &&
                renewPasswordSuccess && (
                  <AlertComponent className="alert" severity="success">
                    {renewPasswordSuccessMessage.Message}
                  </AlertComponent>
                )}

              {!errors.currentPassword &&
                !errors.newPassword &&
                !errors.retypePassword &&
                errorMessage && (
                  <AlertComponent className="alert" severity="warning">
                    {errorMessage}
                  </AlertComponent>
                )}

              <MessageInfoComp
                part1={MessageInfoCompTexts.PART1}
                to="/"
                part2={MessageInfoCompTexts.PART2}
                className="messageInfoComp"
              />
            </form>
          </div>
        </div>
      </div>
    </AccountSecuritySettingsWrapper>
  );
};

export default AccountSecuritySettings;
