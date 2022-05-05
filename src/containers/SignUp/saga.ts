import { call, put, takeLatest } from "redux-saga/effects";
import { makeRequest } from "../../utils/request";
import { Action, User } from "../../utils/types";
import { BACK_URL } from "../../variables";
import {
  requestSignUpError,
  requestSignUpSuccess,
  setSignUpSuccess,
} from "./actions";
import { ActionsTypes } from "./constants";
import { SignUpResponse } from "./types";

function* signUpSaga() {
  yield takeLatest(ActionsTypes.REQUEST_SIGN_UP, RequestSignUp);
}

function* RequestSignUp(action: Action) {
  console.log("signUp saga");
  const options = {
    method: "POST",
    url: `${BACK_URL}/signup`,
    header: {
      "Content-type": "application/json",
    },

    // data: { ...action.payload },
    data: { ...action.payload },
  };

  const response: SignUpResponse = yield call(makeRequest, options);
  const { data, status } = response;

  if ((status >= 400 && status < 600) || data.error) {
    yield put(setSignUpSuccess(false));
    yield put(requestSignUpError(data.error));
  } else {
    yield put(requestSignUpError(""));
    yield put(requestSignUpSuccess(data));
    yield put(setSignUpSuccess(true));
  }
}

export default signUpSaga;
