import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";
import { SigninState } from "./types";

const initialState: SigninState = {
  signinResData: null,
  error: false,
  errorMessage: "",
  verificationError: false,
};

const signInReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_SIGN_IN_SUCCESS:
      return {
        ...state,
        signinResData: action.payload,
      };

    case ActionsTypes.REQUEST_SIGN_IN_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        signinResData: null,
        verificationError: false,
      };

    case ActionsTypes.SET_VERIFICATION_ERROR:
      return {
        ...state,
        verificationError: action.payload,
        errorMessage: "",
      };

    // case ActionsTypes.SET_ERROR_MESSAGE:
    //   return {
    //     ...state,
    //     errorMessage: action.payload,
    //     verificationError: false,
    //   };

    default:
      return state;
  }
};

export default signInReducer;
