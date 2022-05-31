import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: PostShowInfoState = {
  postReactions: [],
  // postReaction: "unlike",
  // postReactionCounter: 0,
};

const postShowInfoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    // case ActionsTypes.SET_POST_REACTION:
    //   return {
    //     ...state,
    //     postReaction: action.payload,
    //   };
    // case ActionsTypes.POST_REACTION_COUNT_PLUS:
    //   return {
    //     ...state,
    //     postReactionCounter: state.postReactionCounter + 1,
    //   };
    // case ActionsTypes.POST_REACTION_COUNT_MINUS:
    //   return {
    //     ...state,
    //     postReactionCounter:
    //       state.postReactionCounter !== 0 && state.postReactionCounter - 1,
    //   };
    // case ActionsTypes:
    //   return {
    //     ...state,
    //     postReactions: [...state.postReactions, action.payload],
    //   };
    default:
      return state;
  }
};

export default postShowInfoReducer;
