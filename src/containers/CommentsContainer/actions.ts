import { ActionsTypes } from "./constants";

const setCommentReaction = (payload: string) => {
  return {
    type: ActionsTypes.SET_COMMENT_REACTION,
    payload,
  };
};

const commentReactionCountPlus = () => {
  return {
    type: ActionsTypes.COMMENT_REACTION_COUNT_PLUS,
  };
};

const commentReactionCountMinus = () => {
  return {
    type: ActionsTypes.COMMENT_REACTION_COUNT_MINUS,
  };
};

export {
  commentReactionCountPlus,
  commentReactionCountMinus,
  setCommentReaction,
};
