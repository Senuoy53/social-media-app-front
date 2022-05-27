import { takeLatest, call, put } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { BACK_URL_API } from "../../variables";
import {
  requestPostCommentCountSuccess,
  requestPostCommentCountError,
  setLoadingPostCommentCount
} from "./actions";
import { makeRequest } from "../../utils/request";
//import { AnnouncementResponse } from "./types";
import { Action } from "../../utils/types";

function* postShowInfoSaga() {
  yield takeLatest(
    ActionsTypes.REQUEST_POST_COMMENT_COUNT,
    requestPostCommentCount
  );
}

function* requestPostCommentCount(action:any) {
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "GET",
      url: `${BACK_URL_API}/comment/getCommentCountByPostId/${action.payload}`,
      headers: {
        //"Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    };

    const response: CommmentCountResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      yield put(requestPostCommentCountError(data.error));
    } else {
      // set loading to true
      yield put(requestPostCommentCountError(""));
      yield put(requestPostCommentCountSuccess(data));
      // set loading to false after downloading data from back
      yield put(setLoadingPostCommentCount(false));
    }
  }
}

export default postShowInfoSaga;
