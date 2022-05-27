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

const makeSelectpostCommentCount = () =>
  createSelector(
    selectFromPostShowInfoStateDomain,
    (postShowInfoState: PostShowInfoState): number =>
      _.get(postShowInfoState, "postCommentCount", 0)
  );
const makeSelectError = () =>
  createSelector(
    selectFromPostShowInfoStateDomain,
    (postShowInfoState: PostShowInfoState): boolean =>
      _.get(postShowInfoState, "error", false)
  );
const makeSelectErrorMessage = () =>
  createSelector(
    selectFromPostShowInfoStateDomain,
    (postShowInfoState: PostShowInfoState): string =>
      _.get(postShowInfoState, "errorMessage", '')
  );
const makeSelectLoading = () =>
  createSelector(
    selectFromPostShowInfoStateDomain,
    (postShowInfoState: PostShowInfoState): boolean =>
      _.get(postShowInfoState, "loading", false)
  );


export { makeSelectPostReaction, makeSelectPostReactionCounter,makeSelectpostCommentCount,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectLoading,
};
