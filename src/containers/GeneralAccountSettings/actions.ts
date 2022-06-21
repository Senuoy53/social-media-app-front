import { User } from "../../utils/types";
import { ActionsTypes } from "./constants";

const requestUpdateUser = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_UPDATE_USER,
    payload,
  };
};

const requestUpdateUserSuccess = (payload: User) => {
  return {
    type: ActionsTypes.REQUEST_UPDATE_USER_SUCCESS,
    payload,
  };
};

const requestUpdateUserError = (payload: string) => {
  return {
    type: ActionsTypes.REQUEST_UPDATE_USER_ERROR,
    payload,
  };
};

const setLoadingUser = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_LOADING_USER,
    payload,
  };
};

const setUpdatedUserSuccess = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_UPDATED_USER_SUCCESS,
    payload,
  };
};

export {
  requestUpdateUser,
  requestUpdateUserSuccess,
  requestUpdateUserError,
  setLoadingUser,
  setUpdatedUserSuccess,
};
