import { fork } from "redux-saga/effects";
import announcementSaga from "../components/Modal/saga";
import checkIdSaga from "../containers/CheckId/saga";
import signinSaga from "../containers/SignIn/saga";
import signUpSaga from "../containers/SignUp/saga";
import postCommentSaga from "../containers/FeedContainer/saga";

function* rootSaga() {
  yield fork(signinSaga);
  yield fork(checkIdSaga);
  yield fork(signUpSaga);
  yield fork(announcementSaga);
  yield fork(postCommentSaga);
}

export default rootSaga;
