import { createSelector } from "reselect";
import { GlobalState, User } from "../../utils/types";
import { SignUpState } from "./types";
import _ from "lodash";

const selectFromCheckIdStateDomain = (globalState: GlobalState): SignUpState =>
  globalState.signUpState;

const makeSelectError = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (signUpState: SignUpState): boolean => _.get(signUpState, "error", false)
  );

const makeSelectErrorMessage = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (signUpState: SignUpState): string => _.get(signUpState, "errorMessage", "")
  );

const makeSelectSignUpSuccess = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (signUpState: SignUpState): boolean =>
      _.get(signUpState, "signUpSuccess", "")
  );

const makeSelectUser = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (signUpState: SignUpState): User => _.get(signUpState, "user", null)
  );

export {
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectSignUpSuccess,
  makeSelectUser,
};
