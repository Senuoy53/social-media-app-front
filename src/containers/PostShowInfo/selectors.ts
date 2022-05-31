import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";

import _ from "lodash";

const selectFromPostShowInfoStateDomain = (
  globalState: GlobalState
): PostShowInfoState => globalState.postShowInfoState;

const makeSelectPostReactions = () =>
  createSelector(
    selectFromPostShowInfoStateDomain,
    (postShowInfoState: PostShowInfoState): any =>
      _.get(postShowInfoState, "postReactions", "")
  );

const makeSelectPostReactionCounter = () =>
  createSelector(
    selectFromPostShowInfoStateDomain,
    (postShowInfoState: PostShowInfoState): number =>
      _.get(postShowInfoState, "postReactionCounter", 0)
  );
export { makeSelectPostReactions, makeSelectPostReactionCounter };
