import { fork } from "redux-saga/effects";
import announcementSaga from "../components/Modal/saga";
import checkIdSaga from "../containers/CheckId/saga";
import signinSaga from "../containers/SignIn/saga";
import signUpSaga from "../containers/SignUp/saga";
import postCommentSaga from "../containers/FeedContainer/saga";
import postShowInfoSaga from "../containers/PostShowInfo/saga";
import postContainerSaga from "../containers/PostContainer/saga"


function* rootSaga() {
  yield fork(signinSaga);
  yield fork(checkIdSaga);
  yield fork(signUpSaga);
  yield fork(announcementSaga);
  yield fork(postCommentSaga);
  yield fork(postShowInfoSaga);
  yield fork(postContainerSaga);
}

export default rootSaga;
