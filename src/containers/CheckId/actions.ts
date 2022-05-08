import { User } from "../../utils/types";
import { ActionsTypes } from "./constants";
import { CheckIdResData } from "./types";

const requestCheckId = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_CHECK_ID,
    payload,
  };
};

const requestCheckIdSuccess = (payload: User) => {
  return {
    type: ActionsTypes.REQUEST_CHECK_ID_SUCCESS,
    payload,
  };
};

const requestCheckIdError = (payload: string) => {
  return {
    type: ActionsTypes.REQUEST_CHECK_ID_ERROR,
    payload,
  };
};

const setCheckIdSuccess = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_CHECK_ID_SUCCESS,
    payload,
  };
};

export {
  requestCheckId,
  requestCheckIdSuccess,
  requestCheckIdError,
  setCheckIdSuccess,
};
