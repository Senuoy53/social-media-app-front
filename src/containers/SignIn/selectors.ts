import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";
import { SigninState, SigninResData } from "./types";
import _ from "lodash";

const selectFromSignInStateDomain = (globalState: GlobalState): SigninState =>
  globalState.signInState;

const makeSelectError = () =>
  createSelector(
    selectFromSignInStateDomain,
    (signInState: SigninState): boolean => _.get(signInState, "error", false)
  );

const makeSelectErrorMessage = () =>
  createSelector(
    selectFromSignInStateDomain,
    (signInState: SigninState): string => _.get(signInState, "errorMessage", "")
  );

const makeSelectSigninResData = () =>
  createSelector(
    selectFromSignInStateDomain,
    (signInState: SigninState): SigninResData =>
      _.get(signInState, "signinResData", null) as SigninResData
  );

const makeSelectAccessToken = () =>
  createSelector(
    makeSelectSigninResData(),
    (signinResData: SigninResData): string =>
      _.get(signinResData, "accessToken", "")
  );

const makeSelectVerificationError = () =>
  createSelector(
    selectFromSignInStateDomain,
    (signInState: SigninState): boolean =>
      _.get(signInState, "verificationError", false)
  );

export {
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectSigninResData,
  makeSelectAccessToken,
  makeSelectVerificationError,
};
