import { call, put, takeLatest } from "redux-saga/effects";
import { authenticate } from "../../utils/app-utils";
import { makeRequest } from "../../utils/request";
import { Action, User } from "../../utils/types";
import { BACK_URL, BACK_URL_API } from "../../variables";
import {
  requestUpdateUserError,
  setLoadingUser,
  setUpdatedUserSuccess,
} from "./actions";
import { ActionsTypes } from "./constants";
import { UpdateUserResponse } from "./types";

function* GeneralAccountSettingsSaga() {
  yield takeLatest(ActionsTypes.REQUEST_UPDATE_USER, RequestUpdateUser);
}

function* RequestUpdateUser(action: Action) {
  // Check if localStorage is empty

  if (typeof window.localStorage !== "undefined") {
    let jwt = localStorage.getItem("jwt");
    let accessToken = JSON.parse(jwt!).accessToken;
    let refreshToken = JSON.parse(jwt!).refreshToken;

    const { userId, ...rest } = action.payload;

    const options = {
      method: "PUT",
      url: `${BACK_URL_API}/v1/users/${action.payload.userId}`,
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },

      data: { ...rest },
    };

    const response: UpdateUserResponse = yield call(makeRequest, options);
    const { data, status } = response;

    if ((status >= 400 && status < 600) || data.error) {
      yield put(setUpdatedUserSuccess(false));
      yield put(requestUpdateUserError(data.error));
      // set laodingUser to false
      yield put(setLoadingUser(false));
      console.log("requestUpdateUser Error: ", data.error);
    } else {
      yield put(requestUpdateUserError(""));

      const { verified, ...user } = data.updatedUser;
      const localStorageData = { accessToken, refreshToken, user };
      // Authenticate - add data to local storage
      authenticate(localStorageData, () => {});
      // console.log("requestUpdateUser Success: ", data.msg);
      // set laodingUser to false
      yield put(setLoadingUser(false));
      yield put(setUpdatedUserSuccess(true));
    }
  }
}

export default GeneralAccountSettingsSaga;
