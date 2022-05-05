import { actionChannel } from "redux-saga/effects";
import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";
import { CheckIdState } from "./types";

const initialState: CheckIdState = {
  error: false,
  errorMessage: "",
  checkIdSuccess: false,
  user: null,
};

const checkIdReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_CHECK_ID_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionsTypes.REQUEST_CHECK_ID_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };

    case ActionsTypes.SET_CHECK_ID_SUCCESS:
      return {
        ...state,
        checkIdSuccess: action.payload,
      };

    default:
      return state;
  }
};

export default checkIdReducer;
