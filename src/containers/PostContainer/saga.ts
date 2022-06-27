import { takeLatest, call, put } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { API_URL} from "../../variables";
import { makeRequest } from "../../utils/request";
import { Action } from "../../utils/types";

function* postContainerSaga() {
  yield takeLatest(ActionsTypes.POST_NEW_COMMENT, postNewComment);
}

function* postNewComment(action: Action) {
  let jwt = localStorage.getItem("jwt");
  let accessToken = JSON.parse(jwt!).accessToken;
  const options = {
    method: "POST",
    url: `${API_URL}/comments/`,
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    data: { ...action.payload },
  };
  const response: PostNewCommentResponse = yield call(makeRequest, options);
  const { data, status } = response;
  if ((status >= 400 && status < 600) || data.error) {
    console.log("PostNewCommentResponse Error: ", data.error);
  } else {
    console.log("PostNewCommentResponse Success: ", data);
  }
}

export default postContainerSaga;
