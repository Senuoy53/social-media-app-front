import { takeLatest, call, put, select } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { BACK_URL_API } from "../../variables";
import {
  requestAnnouncementError,
  requestAnnouncements,
  requestAnnouncementSuccess,
  setLoadingAnnouncement,
  setLoadingMore,
  setCurrentPage,
  emptyAnnouncementData,
} from "./actions";
import { makeRequest } from "../../utils/request";
import { AnnouncementResponse } from "./types";
import { Action } from "../../utils/types";
import { LaodingAnnouncementVaribales } from "../../utils/constants";

function* announcementSaga() {
  yield takeLatest(ActionsTypes.REQUEST_ANNOUNCEMENTS, requestAllAnnouncements);
  yield takeLatest(
    ActionsTypes.SET_ANNOUNCEMENT_DATA,
    requestSetAnnouncementData
  );
}

function* requestSetAnnouncementData(action: Action) {
  // Check if localStorage is empty
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "POST",
      url: `${BACK_URL_API}/announcements/create`,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },

      data: { ...action.payload },
    };

    const response: AnnouncementResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      yield put(requestAnnouncementError(data.error));
    } else {
      yield put(requestAnnouncementError(""));

      // Call the action that get all the announcement
      yield put(
        requestAnnouncements({
          page: LaodingAnnouncementVaribales.PAGE,
          limit: LaodingAnnouncementVaribales.LIMIT,
        })
      );
    }
  }
}

// Get all the announcement
function* requestAllAnnouncements(action: Action) {
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "GET",
      url: `${BACK_URL_API}/announcements`,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      params: { ...action.payload },
    };

    const response: AnnouncementResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      yield put(requestAnnouncementError(data.error));
      // set loading to false after downloading data from back
      yield put(setLoadingMore(false));
    } else {
      // console.log("saga annoucnements data", data);
      // set loading to true
      yield put(requestAnnouncementError(""));
      yield put(requestAnnouncementSuccess(data));
      // set loading to false after downloading data from back
      yield put(setLoadingAnnouncement(false));
      yield put(setLoadingMore(false));
    }
  }
}

export default announcementSaga;
