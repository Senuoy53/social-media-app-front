import { takeLatest, call, put } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { BACK_URL_API } from "../../variables";
import {
  requestAnnouncementError,
  requestAnnouncementSuccess,
} from "./actions";
import { makeRequest } from "../../utils/request";
import { AnnouncementResponse } from "./types";

function* announcementSaga() {
  yield takeLatest(ActionsTypes.REQUEST_ANNOUNCEMENT, requestAllAnnouncements);
}

function* requestAllAnnouncements() {
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
    };

    const response: AnnouncementResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      yield put(requestAnnouncementError(data.error));
    } else {
      yield put(requestAnnouncementError(""));
      yield put(requestAnnouncementSuccess(data));
    }
  }
}

export default announcementSaga;
