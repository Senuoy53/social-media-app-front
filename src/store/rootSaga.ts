import { fork } from "redux-saga/effects";
import signinSaga from "../containers/SignIn/saga";

function* rootSaga() {
  yield fork(signinSaga);
}

export default rootSaga;
