import { combineReducers } from "redux";
import reactionCounterReducer from "../components/ReactionsCount/reducer";
import checkIdReducer from "../containers/CheckId/reducer";
import signInReducer from "../containers/SignIn/reducer";
import signUpReducer from "../containers/SignUp/reducer";
import reactionButtonReducer from "../components/ReactionButton/reducer";

const rootReducer = combineReducers({
  signInState: signInReducer,
  checkIdState: checkIdReducer,
  signUpState: signUpReducer,
  reactionCounterState: reactionCounterReducer,
  reactionButtonState: reactionButtonReducer,
});

export default rootReducer;
