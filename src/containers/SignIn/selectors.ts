import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";
import { SigninForm, SigninState } from "./types";

const selectFromSignInStateDomain = (globalState: GlobalState): SigninState =>
  globalState.signInState;

const makeSelectSigninForm = () =>
  createSelector(
    selectFromSignInStateDomain,
    (signInState: SigninState): SigninForm | null => signInState.signinForm
  );

export { makeSelectSigninForm };
