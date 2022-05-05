import { CheckIdState } from "../containers/CheckId/types";
import { SignUpState } from "../containers/SignUp/types";

interface Action {
  type: string;
  payload?: any;
}

interface User {
  id: string;
  fname: string;
  lname: string;
  email: string;
  password: string;
  verifed: boolean;
}

interface GlobalState {
  signInState: SigninState;
  checkIdState: CheckIdState;
  signUpState: SignUpState;
}

export { Action, User, GlobalState };
