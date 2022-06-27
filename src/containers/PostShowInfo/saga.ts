import { takeLatest, call, put } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { API_URL } from "../../variables";
import { makeRequest } from "../../utils/request";
//import { AnnouncementResponse } from "./types";
import { Action, ReactionResponse } from "../../utils/types";

function* postShowInfoSaga() {
  yield takeLatest(
    ActionsTypes.REQUEST_ADD_ANNOUNCEMENT_REACTION,
    RequestAddAnnouncementReaction
  );
  yield takeLatest(
    ActionsTypes.REQUEST_UPDATE_ANNOUNCEMENT_REACTION,
    RequestUpdateAnnouncementReaction
  );
  yield takeLatest(
    ActionsTypes.REQUEST_REMOVE_ANNOUNCEMENT_REACTION,
    RequestRemoveAnnouncementReaction
  );
}

// Request to add a reaction to db
function* RequestAddAnnouncementReaction(action: Action) {
  // Check if localStorage is empty if (typeof window.localStorage !== "undefined") {
  let jwt = localStorage.getItem("jwt");
  let accessToken = JSON.parse(jwt!).accessToken;
  const options = {
    method: "POST",
    url: `${API_URL}/reactions/`,
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    data: { ...action.payload },
  };
  const response: ReactionResponse = yield call(makeRequest, options);
  const { data, status } = response;
  if ((status >= 400 && status < 600) || data.error) {
    console.log("requestAddPostReaction Error: ", data.error);
  } else {
    console.log("requestAddPostReaction Success: ", data);
  }
}

// Request to update a reaction in db
function* RequestUpdateAnnouncementReaction(action: Action) {
  // Check if localStorage is empty

  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "PUT",
      url: `${API_URL}/reactions`,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },

      data: { ...action.payload },
    };

    const response: ReactionResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      console.log("requestUpdatePostReaction Error: ", data.error);
    } else {
      console.log("requestUpdatePostReaction Success: ", data);
    }
  }
}

// Request to update a reaction in db
function* RequestRemoveAnnouncementReaction(action: Action) {
  // Check if localStorage is empty
  console.log("i'm in saga remove reaction");
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "DELETE",
      url: `${API_URL}/reactions`,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },

      data: { ...action.payload },
    };

    const response: ReactionResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      console.log("requestRemovePostReaction Error: ", data.error);
    } else {
      console.log("requestRemovePostReaction Success: ", data);
    }
  }
}

export default postShowInfoSaga;
