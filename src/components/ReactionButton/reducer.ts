import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: ReactionButtonState = {
  reaction: "unlike",
};

const reactionButtonReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.SET_REACTION:
      return {
        ...state,
        reaction: action.payload,
      };
    default:
      return state;
  }
};

export default reactionButtonReducer;
