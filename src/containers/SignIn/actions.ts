import { ActionsTypes } from "./constants";
import { SigninResData } from "./types";

const setSigninData = (payload: {}) => {
  return {
    type: ActionsTypes.SET_SIGN_IN_DATA,
  };
};

const requestSignin = () => {
  return {
    type: ActionsTypes.REQUEST_SIGN_IN,
  };
};

const requestSigninSuccess = (payload: SigninResData) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_IN_SUCCESS,
  };
};

const requestSigninError = (payload: string) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_IN_ERROR,
  };
};

export {
  setSigninData,
  requestSignin,
  requestSigninSuccess,
  requestSigninError,
};
