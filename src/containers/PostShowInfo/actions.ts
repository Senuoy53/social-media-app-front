import { ActionsTypes } from "./constants";

const requestAddReaction = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_ADD_REACTION,
    payload,
  };
};

const requestUpdateReaction = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_UPDATE_REACTION,
    payload,
  };
};

const requestRemoveReaction = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_REMOVE_REACTION,
    payload,
  };
};

export { requestAddReaction, requestUpdateReaction, requestRemoveReaction };
