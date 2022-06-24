import { User } from "../../utils/types";
import { ActionsTypes } from "./constants";

const requestRenewPassword = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_RENEW_PASSWORD,
    payload,
  };
};

const requestRenewPasswordSuccess = (payload: User) => {
  return {
    type: ActionsTypes.REQUEST_RENEW_PASSWORD_SUCCESS,
    payload,
  };
};

const requestRenewPasswordError = (payload: string) => {
  return {
    type: ActionsTypes.REQUEST_RENEW_PASSWORD_ERROR,
    payload,
  };
};

const setRenewPasswordSuccess = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_RENEW_PASSWORD_SUCCESS,
    payload,
  };
};

export {
  requestRenewPassword,
  requestRenewPasswordSuccess,
  requestRenewPasswordError,
  setRenewPasswordSuccess,
};
