import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: PostShowInfoState = {
  postReaction: "unlike",
  postReactionCounter: 0,
  //AS
  postCommentCount: 0,
  error: false,
  errorMessage: "",
  loading: false,
};

const postShowInfoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.SET_POST_REACTION:
      return {
        ...state,
        postReaction: action.payload,
      };
    case ActionsTypes.POST_REACTION_COUNT_PLUS:
      return {
        ...state,
        postReactionCounter: state.postReactionCounter + 1,
      };
    case ActionsTypes.POST_REACTION_COUNT_MINUS:
      return {
        ...state,
        postReactionCounter:
          state.postReactionCounter !== 0 && state.postReactionCounter - 1,
      };
    //AS
    case ActionsTypes.REQUEST_POST_COMMENT_COUNT_SUCCESS:
      return {
        ...state,
        postCommentCount: action.payload,
      };
    case ActionsTypes.REQUEST_POST_COMMENT_COUNT_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case ActionsTypes.SET_LOADING_POST_COMMENT_COUNT:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
};

export default postShowInfoReducer;
