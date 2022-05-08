import { User } from "../../utils/types";
import { ActionsTypes } from "./constants";

const requestSignUp = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_UP,
    payload,
  };
};

const requestSignUpSuccess = (payload: User) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_UP_SUCCESS,
    payload,
  };
};

const requestSignUpError = (payload: string) => {
  return {
    type: ActionsTypes.REQUEST_SIGN_UP_ERROR,
    payload,
  };
};

const setSignUpSuccess = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_SIGN_UP_SUCCESS,
    payload,
  };
};

export {
  requestSignUp,
  requestSignUpSuccess,
  requestSignUpError,
  setSignUpSuccess,
};
