import { ActionsTypes } from "./constants";

const reactionCountPlus = () => {
  return {
    type: ActionsTypes.REACTION_COUNT_PLUS,
  };
};

const reactionCountMinus = () => {
  return {
    type: ActionsTypes.REACTION_COUNT_MINUS,
  };
};

export { reactionCountPlus, reactionCountMinus };
