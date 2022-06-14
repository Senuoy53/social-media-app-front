import { ActionsTypes } from "./constants";

const requestAddAnnouncementReaction = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_ADD_ANNOUNCEMENT_REACTION,
    payload,
  };
};

const requestUpdateAnnouncementReaction = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_UPDATE_ANNOUNCEMENT_REACTION,
    payload,
  };
};

const requestRemoveAnnouncementReaction = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_REMOVE_ANNOUNCEMENT_REACTION,
    payload,
  };
};

export {
  requestAddAnnouncementReaction,
  requestUpdateAnnouncementReaction,
  requestRemoveAnnouncementReaction,
};
