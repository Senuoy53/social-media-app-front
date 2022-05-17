import { ActionsTypes } from "./constants";

const requestAnnouncement = () => {
  return {
    type: ActionsTypes.REQUEST_ANNOUNCEMENT,
  };
};

const requestAnnouncementSuccess = (payload: any) => {
  return {
    type: ActionsTypes.REQUEST_ANNOUNCEMENT_SUCCESS,
    payload,
  };
};

const requestAnnouncementError = (payload: string) => {
  return {
    type: ActionsTypes.REQUEST_ANNOUNCEMENT_ERROR,
    payload,
  };
};

export {
  requestAnnouncement,
  requestAnnouncementSuccess,
  requestAnnouncementError,
};
