import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";

import _ from "lodash";
import { AccountSecuritySettingsState } from "./types";

const selectFromAccountSecuritySettingsStateDomain = (
  globalState: GlobalState
): AccountSecuritySettingsState => globalState.accountSecuritySettingsState;

const makeSelectRenewPasswordSuccess = () =>
  createSelector(
    selectFromAccountSecuritySettingsStateDomain,
    (accountSecuritySettingsState: AccountSecuritySettingsState): boolean =>
      _.get(accountSecuritySettingsState, "renewPasswordSuccess", false)
  );

const makeSelectErrorMessage = () =>
  createSelector(
    selectFromAccountSecuritySettingsStateDomain,
    (accountSecuritySettingsState: AccountSecuritySettingsState): string =>
      _.get(accountSecuritySettingsState, "errorMessage", "")
  );

export { makeSelectRenewPasswordSuccess, makeSelectErrorMessage };
