import { setSigninData } from "./actions";
import { ActionsTypes, signinFields } from "./constants";
import { SigninState, Action } from "./types";

const initialState: SigninState = {
  signinResData: null,
  error: false,
  errorMessage: "",
  signinForm: {
    email: "",
    password: "",
  },
};

const signInReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.SET_SIGN_IN_DATA:
      let signinForm = null;
      if (action.payload.email == signinFields.email) {
        signinForm = { ...state.signinForm, email: action.payload.value };
        return { ...state, signinForm };
      }

      if (action.payload.password == signinFields.password) {
        signinForm = { ...state.signinForm, email: action.payload.value };
        return { ...state, signinForm };
      }
      return state;

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
      };

    default:
      return state;
  }
};

export default signInReducer;
