import { ActionsTypes } from "./constants";

const setAnnouncementData = (payload: {}) => {
  return {
    type: ActionsTypes.SET_ANNOUNCEMENT_DATA,
    payload,
  };
};

const requestAnnouncements = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_ANNOUNCEMENTS,
    payload,
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

const setCurrentPage = (payload: number) => {
  return {
    type: ActionsTypes.SET_CURRENT_PAGE,
    payload,
  };
};

const setLoadingMore = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_LOADING_MORE,
    payload,
  };
};

const emptyAnnouncementData = (payload: []) => {
  return {
    type: ActionsTypes.EMPTY_ANNOUCNEMENT_DATA,
    payload,
  };
};

export {
  requestAnnouncements,
  requestAnnouncementSuccess,
  requestAnnouncementError,
  setAnnouncementData,
  setLoadingAnnouncement,
  setCurrentPage,
  setLoadingMore,
  emptyAnnouncementData,
};
