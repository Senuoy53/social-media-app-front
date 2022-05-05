import { call, put, takeLatest } from "redux-saga/effects";
import { makeRequest } from "../../utils/request";
import { Action, User } from "../../utils/types";
import { BACK_URL } from "../../variables";
import {
  requestCheckIdError,
  requestCheckIdSuccess,
  setCheckIdSuccess,
} from "./actions";
import { ActionsTypes } from "./constants";
import { CheckIdResponse } from "./types";

function* checkIdSaga() {
  yield takeLatest(ActionsTypes.REQUEST_CHECK_ID, RequestCheckId);
}

function* RequestCheckId(action: Action) {
  const { id } = action.payload;
  const options = {
    method: "GET",
    url: `${BACK_URL}/checkSimUser/${id}`,
  };

  const response: CheckIdResponse = yield call(makeRequest, options);
  const { data, status } = response;

  if ((status >= 400 && status < 600) || data.error) {
    yield put(setCheckIdSuccess(false));
    yield put(requestCheckIdError(data.error));
  } else {
    yield put(requestCheckIdError(""));
    yield put(requestCheckIdSuccess(data));
    yield put(setCheckIdSuccess(true));
  }
}

export default checkIdSaga;
