import { ActionsTypes } from "./constants";

const setPostReaction = (payload: string) => {
  return {
    type: ActionsTypes.SET_POST_REACTION,
    payload,
  };
};

const postReactionCountPlus = () => {
  return {
    type: ActionsTypes.POST_REACTION_COUNT_PLUS,
  };
};

const postReactionCountMinus = () => {
  return {
    type: ActionsTypes.POST_REACTION_COUNT_MINUS,
  };
};

export { postReactionCountPlus, postReactionCountMinus, setPostReaction };
