import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";
import { SignUpState } from "./types";

const initialState: SignUpState = {
  error: false,
  errorMessage: "",
  signUpSuccess: false,
  user: null,
};

const signUpReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionsTypes.REQUEST_SIGN_UP_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };

    case ActionsTypes.SET_SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.payload,
      };

    default:
      return state;
  }
};

export default signUpReducer;
