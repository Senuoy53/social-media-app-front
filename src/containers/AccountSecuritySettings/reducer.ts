import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";
import { AccountSecuritySettingsState } from "./types";

const initialState: AccountSecuritySettingsState = {
  error: false,
  errorMessage: "",
  renewPasswordSuccess: false,
};

const accountSecuritySettingsReducer = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_RENEW_PASSWORD_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };

    case ActionsTypes.SET_RENEW_PASSWORD_SUCCESS:
      return {
        ...state,
        renewPasswordSuccess: action.payload,
      };

    default:
      return state;
  }
};

export default accountSecuritySettingsReducer;
