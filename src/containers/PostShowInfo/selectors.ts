import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";

import _ from "lodash";

const selectFromPostShowInfoStateDomain = (
  globalState: GlobalState
): PostShowInfoState => globalState.postShowInfoState;

const makeSelectPostReaction = () =>
  createSelector(
    selectFromPostShowInfoStateDomain,
    (postShowInfoState: PostShowInfoState): string =>
      _.get(postShowInfoState, "postReaction", "")
  );

const makeSelectPostReactionCounter = () =>
  createSelector(
    selectFromPostShowInfoStateDomain,
    (postShowInfoState: PostShowInfoState): number =>
      _.get(postShowInfoState, "postReactionCounter", 0)
  );

export { makeSelectPostReaction, makeSelectPostReactionCounter};
