import { Action } from "../../utils/types";
import { ActionsTypes } from "./constants";

const initialState: ReactionCounterState = {
  reactionCounter: 0,
};

const reactionCounterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.REACTION_COUNT_PLUS:
      return {
        ...state,
        reactionCounter: state.reactionCounter + 1,
      };
    case ActionsTypes.REACTION_COUNT_MINUS:
      return {
        ...state,
        reactionCounter:
          state.reactionCounter !== 0 && state.reactionCounter - 1,
      };
    default:
      return state;
  }
};

export default reactionCounterReducer;
