import { combineReducers } from "redux";
import checkIdReducer from "../containers/CheckId/reducer";
import signInReducer from "../containers/SignIn/reducer";
import signUpReducer from "../containers/SignUp/reducer";
import postShowInfoReducer from "../containers/PostShowInfo/reducer";
import commentsReducer from "../containers/CommentsContainer/reducer";

const rootReducer = combineReducers({
  signInState: signInReducer,
  checkIdState: checkIdReducer,
  signUpState: signUpReducer,
  postShowInfoState: postShowInfoReducer,
  commentsState: commentsReducer,
});

export default rootReducer;
