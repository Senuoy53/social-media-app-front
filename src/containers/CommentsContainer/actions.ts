import { ActionsTypes } from "./constants";

const requestAddCommentReaction = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_ADD_COMMENT_REACTION,
    payload,
  };
};

const requestUpdateCommentReaction = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_UPDATE_COMMENT_REACTION,
    payload,
  };
};

const requestRemoveCommentReaction = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_REMOVE_COMMENT_REACTION,
    payload,
  };
};

export {
  requestAddCommentReaction,
  requestUpdateCommentReaction,
  requestRemoveCommentReaction,
};
