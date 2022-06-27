import { takeLatest, call, put, select } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { API_URL } from "../../variables";
import {
  requestSigninError,
  requestSigninSuccess,
  setVerificationError,
} from "./actions";
import { makeRequest } from "../../utils/request";
import { SignInResponse } from "./types";
import { Action } from "../../utils/types";
import { authenticate } from "../../utils/app-utils";

function* signinSaga() {
  yield takeLatest(ActionsTypes.REQUEST_SIGN_IN, RequestSignIn);
}

function* RequestSignIn(action: Action) {
  const { email, password, history } = action.payload;
  const options = {
    method: "POST",
    url: `${API_URL}/auth/signin`,
    header: {
      "Content-type": "application/json",
    },

    // data: { ...action.payload },
    data: { email: email, password: password },
  };

  //   try {
  const response: SignInResponse = yield call(makeRequest, options);
  const { data, status } = response;

  // I have only 4xx and 5xx http errors
  if (status >= 400 && status < 600) {
    if (data.error === "Please verify user") {
      yield put(setVerificationError(true));
    } else {
      yield put(setVerificationError(false));
      yield put(requestSigninError(data.error));
    }
  } else {
    yield put(setVerificationError(false));
    yield put(requestSigninSuccess(data));
    // Authenticate - add data to local storage
    authenticate(data, () => {});
    history("/");
  }
}

export default signinSaga;
