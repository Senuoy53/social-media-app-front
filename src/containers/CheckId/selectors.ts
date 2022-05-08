import { createSelector } from "reselect";
import { GlobalState, User } from "../../utils/types";
import { CheckIdResData, CheckIdState } from "./types";
import _ from "lodash";

const selectFromCheckIdStateDomain = (globalState: GlobalState): CheckIdState =>
  globalState.checkIdState;

const makeSelectError = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (checkIdState: CheckIdState): boolean => _.get(checkIdState, "error", false)
  );

const makeSelectErrorMessage = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (checkIdState: CheckIdState): string =>
      _.get(checkIdState, "errorMessage", "")
  );

const makeSelectcheckIdSuccess = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (checkIdState: CheckIdState): boolean =>
      _.get(checkIdState, "checkIdSuccess", "")
  );

const makeSelectUser = () =>
  createSelector(
    selectFromCheckIdStateDomain,
    (checkIdState: CheckIdState): User => _.get(checkIdState, "user", null)
  );

export {
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectcheckIdSuccess,
  makeSelectUser,
};
