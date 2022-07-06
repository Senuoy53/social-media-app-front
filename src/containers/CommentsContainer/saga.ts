import { takeLatest, call, put } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { API_URL } from "../../variables";
import { makeRequest } from "../../utils/request";
import { Action, ReactionResponse } from "../../utils/types";

function* CommentContainerSaga() {
  yield takeLatest(
    ActionsTypes.REQUEST_ADD_COMMENT_REACTION,
    RequestAddCommentReaction
  );
  yield takeLatest(
    ActionsTypes.REQUEST_UPDATE_COMMENT_REACTION,
    RequestUpdateCommentReaction
  );
  yield takeLatest(
    ActionsTypes.REQUEST_REMOVE_COMMENT_REACTION,
    RequestRemoveCommentReaction
  );
}

// Request to add a reaction to db
function* RequestAddCommentReaction(action: Action) {
  // Check if localStorage is empty if (typeof window.localStorage !== "undefined") {
  // console.log("i'm in saga Add reaction");
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "POST",
      url: `${API_URL}/reactionsc/`,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      data: { ...action.payload },
    };
    const response: ReactionResponse = yield call(makeRequest, options);
    const { data, status } = response;
    if ((status >= 400 && status < 600) || data.error) {
      console.log("requestAddCommentReaction Error: ", data.error);
    } else {
      // console.log("requestAddCommentReaction Success: ", data);
    }
  }
}

// Request to update a reaction in db
function* RequestUpdateCommentReaction(action: Action) {
  // Check if localStorage is empty
  // console.log("i'm in saga Update reaction");

  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "PUT",
      url: `${API_URL}/reactionsc/`,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },

      data: { ...action.payload },
    };

    const response: ReactionResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      console.log("requestUpdateCommentReaction Error: ", data.error);
    } else {
      // console.log("requestUpdateCommentReaction Success: ", data);
    }
  }
}

// Request to update a reaction in db
function* RequestRemoveCommentReaction(action: Action) {
  // Check if localStorage is empty
  // console.log("i'm in saga remove reaction");
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "DELETE",
      url: `${API_URL}/reactionsc/`,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },

      data: { ...action.payload },
    };

    const response: ReactionResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      console.log("requestRemoveCommentReaction Error: ", data.error);
    } else {
      // console.log("requestRemoveCommentReaction Success: ", data);
    }
  }
}

export default CommentContainerSaga;
