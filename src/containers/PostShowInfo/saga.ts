
import { takeLatest, call, put } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { BACK_URL_API } from "../../variables";
import { makeRequest } from "../../utils/request";
//import { AnnouncementResponse } from "./types";
import { Action } from "../../utils/types";

// Request to update a reaction in db
function* RequestUpdateReaction(action: Action) {
  // Check if localStorage is empty

  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "PUT",
      url: `${BACK_URL_API}/reaction/update/`,
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
function* RequestRemoveReaction(action: Action) {
  // Check if localStorage is empty
  console.log("i'm in saga remove reaction");
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "DELETE",
      url: `${BACK_URL_API}/reaction/remove/`,
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

