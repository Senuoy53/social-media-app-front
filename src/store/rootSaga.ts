import { fork } from "redux-saga/effects";
import checkIdSaga from "../containers/CheckId/saga";
import signinSaga from "../containers/SignIn/saga";
import signUpSaga from "../containers/SignUp/saga";

function* rootSaga() {
  yield fork(signinSaga);
  yield fork(checkIdSaga);
  yield fork(signUpSaga);
}

export default rootSaga;
