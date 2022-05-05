import { ActionsTypes } from "./constants";
import { SigninResData } from "./types";

const requestSignin = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_IN,
    payload,
  };
};

const requestSigninSuccess = (payload: SigninResData) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_IN_SUCCESS,
    payload,
  };
};

const requestSigninError = (payload: string) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_IN_ERROR,
    payload,
  };
};

const setVerificationError = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_VERIFICATION_ERROR,
    payload,
  };
};

const setErrorMessage = (payload: string) => {
  return {
    type: ActionsTypes.SET_ERROR_MESSAGE,
    payload,
  };
};

export {
  requestSignin,
  requestSigninSuccess,
  requestSigninError,
  setVerificationError,
  setErrorMessage,
};
