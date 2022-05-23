import { ActionsTypes } from "./constants";

const setAnnouncementData = (payload: {}) => {
  return {
    type: ActionsTypes.SET_ANNOUNCEMENT_DATA,
    payload,
  };
};

const requestAnnouncements = () => {
  return {
    type: ActionsTypes.REQUEST_ANNOUNCEMENTS,
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

const setLoadingAnnouncement = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_LOADING_ANNOUNCEMENT,
    payload,
  };
};

export {
  requestAnnouncements,
  requestAnnouncementSuccess,
  requestAnnouncementError,
  setAnnouncementData,
  setLoadingAnnouncement,
};
