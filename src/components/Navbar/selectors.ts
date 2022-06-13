import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";

import _ from "lodash";

const selectNavBarStateDomain = (globalState: GlobalState): NavBarState =>
  globalState.navBarState;

const makeSelectEvBtnClicked = () =>
  createSelector(selectNavBarStateDomain, (navBarState: NavBarState): boolean =>
    _.get(navBarState, "evBtnClicked", false)
  );

export { makeSelectEvBtnClicked };
