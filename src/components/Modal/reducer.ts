import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";
import { AnnouncementState } from "./types";

const initialState: AnnouncementState = {
  announcement: [],
  error: false,
  errorMessage: "",
  loading: false,
  currentPage: 0,
  totalPages: 1,
  loadingMore: false,
  submitPostClicked: false,
};

const announcementReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,

        announcement: [...state.announcement, ...action.payload.announcement],
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      };

    case ActionsTypes.REQUEST_ANNOUNCEMENT_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        // announcement: null,
      };

    case ActionsTypes.SET_LOADING_ANNOUNCEMENT:
      return {
        ...state,
        loading: action.payload,
      };

    case ActionsTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ActionsTypes.SET_LOADING_MORE:
      return {
        ...state,
        loadingMore: action.payload,
      };

    case ActionsTypes.EMPTY_ANNOUCNEMENT_DATA:
      return {
        ...state,
        announcement: action.payload,
      };

    case ActionsTypes.SET_SUBMIT_POST_CLICKED:
      return {
        ...state,
        submitPostClicked: action.payload,
      };

    default:
      return state;
  }
};

export default announcementReducer;
