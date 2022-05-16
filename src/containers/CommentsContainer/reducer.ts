import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: CommentsState = {
  commentReaction: "unlike",
  commentReactionCounter: 0,
};

const commentsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.SET_COMMENT_REACTION:
      return {
        ...state,
        commentReaction: action.payload,
      };
    case ActionsTypes.COMMENT_REACTION_COUNT_PLUS:
      return {
        ...state,
        commentReactionCounter: state.commentReactionCounter + 1,
      };
    case ActionsTypes.COMMENT_REACTION_COUNT_MINUS:
      return {
        ...state,
        commentReactionCounter:
          state.commentReactionCounter !== 0 &&
          state.commentReactionCounter - 1,
      };
    default:
      return state;
  }
};

export default commentsReducer;
