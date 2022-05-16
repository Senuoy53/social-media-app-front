import { Button, TextField } from "@mui/material";
import CheckIdWrapper from "./CheckIdrapper";
import Layout from "../../components/Layout";
import { MessageInfo, ButtonField } from "./constants";

import { SubTitle } from "./constants";
import MessageInfoComp from "../../components/MessageInfoComp";
import { useEffect, useState } from "react";
import { ValuesType } from "./types";
import { useDispatch, useSelector } from "react-redux";
import {
  requestCheckId,
  requestCheckIdError,
  setCheckIdSuccess,
} from "./actions";
import { createStructuredSelector } from "reselect";
import {
  makeSelectUser,
  makeSelectcheckIdSuccess,
  makeSelectErrorMessage,
} from "./selectors";
import SignUp from "../SignUp";

// CheckId selectors
const checkIdState = createStructuredSelector({
  errorMessage: makeSelectErrorMessage(),
  checkIdSuccess: makeSelectcheckIdSuccess(),
  User: makeSelectUser(),
});

const CheckId = () => {
  const [formValues, setFormValues] = useState({ userID: "" });
  const [formErrors, setFormErrors] = useState<ValuesType>({
    userID: "",
  });

  // useDispatch
  const dispatch = useDispatch();
  // Selectors
  const { errorMessage, checkIdSuccess, User } = useSelector(checkIdState);

  // useEffect to empty errors and change checkIdSuccess to False
  useEffect(() => {
    dispatch(requestCheckIdError(""));
    dispatch(setCheckIdSuccess(false));
  }, []);

  // Handle change function
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //   ValidateForm Funtion
  const validateForm = (values: ValuesType) => {
    const errors: any = {};

    if (!values.userID) {
      errors.userID = "Please enter a User ID!!!";
    } else if (values.userID.length < 16) {
      errors.userID = "Minimum require length is 16";
    }

    return errors;
  };

  // clickCheckId Function
  const clickCheckId = (event: any) => {
    event.preventDefault();
    setFormErrors(validateForm(formValues));
    const { userID } = validateForm(formValues);

    if (userID) {
      dispatch(requestCheckIdError(""));
    } else {
      dispatch(requestCheckId({ id: formValues.userID }));
    }
  };

  return (
    <>
      {/* CHECK IF checkIdSuccess IS TRUE OR FALSE */}
      {!checkIdSuccess ? (
        <Layout subtitle={SubTitle.SIGN_UP}>
          {/* Form */}
          <CheckIdWrapper>
            <div className="input-box">
              <div className="input-container">
                <TextField
                  id="outlined-basic"
                  label="User ID"
                  variant="outlined"
                  className="input"
                  name="userID"
                  value={formValues.userID}
                  onChange={handleChange}
                />
                {formErrors && <p className="errors">{formErrors.userID}</p>}
                {errorMessage && <p className="errors">{errorMessage}</p>}
              </div>
            </div>

            <Button variant="contained" className="btn" onClick={clickCheckId}>
              {ButtonField.CHECK_USER_ID}
            </Button>
            <MessageInfoComp
              part1={MessageInfo.ALREADY_SIGN_UP}
              to="/signin"
              part2={MessageInfo.LOGIN_NOW}
            />
          </CheckIdWrapper>
        </Layout>
      ) : (
        // Redirection to SignUp container
        <SignUp
          checkedId={formValues.userID}
          checkedFname={User.fname}
          checkedLname={User.lname}
          checkedEmail={User.email}
        />
      )}
    </>
  );
};

export default CheckId;
