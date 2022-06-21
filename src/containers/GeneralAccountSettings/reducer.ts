import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";
import { GeneralAccountSettingsState } from "./types";

const initialState: GeneralAccountSettingsState = {
  error: false,
  errorMessage: "",
  user: null,
  loadingUser: false,
  updatedUserSuccess: false,
};

const generalAccountSettingsReducer = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionsTypes.REQUEST_UPDATE_USER_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case ActionsTypes.SET_LOADING_USER:
      return {
        ...state,
        loadingUser: action.payload,
      };
    case ActionsTypes.SET_UPDATED_USER_SUCCESS:
      return {
        ...state,
        updatedUserSuccess: action.payload,
      };

    // case ActionsTypes.SET_SIGN_UP_SUCCESS:
    //   return {
    //     ...state,
    //     signUpSuccess: action.payload,
    //   };

    default:
      return state;
  }
};

export default generalAccountSettingsReducer;
