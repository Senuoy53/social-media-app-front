import { combineReducers } from "redux";
import signInReducer from "../containers/SignIn/reducer";

const rootReducer = combineReducers({
  signInState: signInReducer,
});

export default rootReducer;
