import { fork } from "redux-saga/effects";
import announcementSaga from "../components/Modal/saga";
import checkIdSaga from "../containers/CheckId/saga";
import signinSaga from "../containers/SignIn/saga";
import signUpSaga from "../containers/SignUp/saga";

function* rootSaga() {
  yield fork(signinSaga);
  yield fork(checkIdSaga);
  yield fork(signUpSaga);
  yield fork(announcementSaga);
}

export default rootSaga;
