import { combineReducers } from "redux";
import checkIdReducer from "../containers/CheckId/reducer";
import signInReducer from "../containers/SignIn/reducer";
import signUpReducer from "../containers/SignUp/reducer";

const rootReducer = combineReducers({
  signInState: signInReducer,
  checkIdState: checkIdReducer,
  signUpState: signUpReducer,
});

export default rootReducer;
