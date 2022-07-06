import { call, put, takeLatest } from "redux-saga/effects";
import { makeRequest } from "../../utils/request";
import { Action } from "../../utils/types";
import { API_URL } from "../../variables";
import { requestRenewPasswordError, setRenewPasswordSuccess } from "./actions";
import { ActionsTypes } from "./constants";
import { RenewPasswordResponse } from "./types";

function* AccountSecuritySettingsSaga() {
  yield takeLatest(ActionsTypes.REQUEST_RENEW_PASSWORD, RequestRenewPassword);
}

function* RequestRenewPassword(action: Action) {
  // Check if localStorage is empty

  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;

    const { userId, ...rest } = action.payload;

    const options = {
      method: "PUT",
      url: `${API_URL}/v1/users/password/${action.payload.userId}`,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },

      data: { ...rest },
    };

    const response: RenewPasswordResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      yield put(setRenewPasswordSuccess(false));
      yield put(requestRenewPasswordError(data.error));

      // console.log("requestUpdateUser Error: ", data.error);
    } else {
      yield put(requestRenewPasswordError(""));
      // console.log("requestUpdateUser Success: ", data.msg);

      yield put(setRenewPasswordSuccess(true));
    }
  }
}

export default AccountSecuritySettingsSaga;
