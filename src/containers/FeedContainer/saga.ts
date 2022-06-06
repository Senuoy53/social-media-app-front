import { takeLatest, call, put, take, takeLeading, delay, fork, actionChannel } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { BACK_URL_API } from "../../variables";
import {
  requestPostCommentSuccess,
  requestPostCommentError,
  setLoadingPostComment,
} from "./actions";
import { makeRequest } from "../../utils/request";
import { Channel } from "redux-saga";

function* postCommentSaga() {
  // 1- Create a channel for request actions
  const requestChan = (yield actionChannel(ActionsTypes.REQUEST_POST_COMMENT)) as Channel<ActionInterface>;
  while (true) {
    // 2- take from the channel
    const {payload} = yield take(requestChan)
    // 3- Note that we're using a blocking call
    yield call(requestPostComment, payload)
  }
}

function* requestPostComment(payload:any) {
  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const options = {
      method: "POST",
      url: `${BACK_URL_API}/comment/getCommentByPostId/${payload.postId}`,
      data: {
        "seenIds":payload.seenCommentIds
      },
      headers: {
        //"Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    };

    const response: PostCommentResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      yield put(requestPostCommentError(data.error));
    } else {
      // set loading to true
      yield put(setLoadingPostComment({ isLoading: true,
                                        idOfLoadingPostComment: payload.postId
                                      }));
      //request data
      yield put(requestPostCommentSuccess(data));
      // set loading to false after downloading data from back
      yield put(setLoadingPostComment({ isLoading: false,
                                        idOfLoadingPostComment: ''
                                      }));
    }
  }
}

export default postCommentSaga;
