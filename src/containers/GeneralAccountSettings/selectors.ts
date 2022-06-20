import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";

import _ from "lodash";
import { GeneralAccountSettingsState } from "./types";

const selectFromGeneralAccountSettingsStateDomain = (
  globalState: GlobalState
): GeneralAccountSettingsState => globalState.generalAccountSettingsState;

const makeSelectLoadingUser = () =>
  createSelector(
    selectFromGeneralAccountSettingsStateDomain,
    (generalAccountSettingsState: GeneralAccountSettingsState): boolean =>
      _.get(generalAccountSettingsState, "loadingUser", false)
  );

const makeSelectUpdatedUserSuccess = () =>
  createSelector(
    selectFromGeneralAccountSettingsStateDomain,
    (generalAccountSettingsState: GeneralAccountSettingsState): boolean =>
      _.get(generalAccountSettingsState, "updatedUserSuccess", false)
  );

const makeSelectErrorMessage = () =>
  createSelector(
    selectFromGeneralAccountSettingsStateDomain,
    (generalAccountSettingsState: GeneralAccountSettingsState): string =>
      _.get(generalAccountSettingsState, "errorMessage", "")
  );

export {
  makeSelectLoadingUser,
  makeSelectUpdatedUserSuccess,
  makeSelectErrorMessage,
};
