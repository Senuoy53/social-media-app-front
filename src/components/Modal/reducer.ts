import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";
import { AnnouncementState } from "./types";

const initialState: AnnouncementState = {
  announcement: null,
  error: false,
  errorMessage: "",
};

const announcementReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_ANNOUNCEMENT_SUCCESS:
      console.log("success payload :", action.payload);
      return {
        ...state,
        announcement: action.payload,
      };

    case ActionsTypes.REQUEST_ANNOUNCEMENT_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        announcement: null,
      };

    // case ActionsTypes.SET_VERIFICATION_ERROR:
    //   return {
    //     ...state,
    //     verificationError: action.payload,
    //     errorMessage: "",
    //   };

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

export default announcementReducer;
