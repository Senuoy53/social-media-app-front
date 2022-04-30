import { takeLatest, call, put } from "redux-saga/effects";
import { ActionsTypes } from "./constants";
import { BACK_URL } from "../../variables";
import { requestSigninError, requestSigninSuccess } from "./actions";
import { makeRequest } from "../../utils/request";
import { SignInResponse } from "./types";

function* signinSaga() {
  yield takeLatest(ActionsTypes.REQUEST_SIGN_IN, requestSignIn);
}

function* requestSignIn() {
  console.log("im here in saga");
  console.log("url", BACK_URL);
  const options = {
    method: "POST",
    url: `${BACK_URL}/signin`,
    header: {
      "Content-type": "application/json",
    },
    data: { email: "asadali@emeal.nttdata.com", password: "Amine@12" },
  };

  //   try {
  const response: SignInResponse = yield call(makeRequest, options);
  const { data, status } = response;

  // I have only 4xx and 5xx http errors
  if (status >= 400 && status < 600) {
    console.log("erro request", data.error);
    yield put(requestSigninError(data.error));
  } else {
    console.log("success post request", data);
    yield put(requestSigninSuccess(data));
  }
}

export default signinSaga;
