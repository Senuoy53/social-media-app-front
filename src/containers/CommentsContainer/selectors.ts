import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";

import _ from "lodash";

const selectFromCommentsStateDomain = (
  globalState: GlobalState
): CommentsState => globalState.commentsState;

const makeSelectCommentReaction = () =>
  createSelector(
    selectFromCommentsStateDomain,
    (commentsState: CommentsState): string =>
      _.get(commentsState, "commentReaction", "")
  );

const makeSelectCommentReactionCounter = () =>
  createSelector(
    selectFromCommentsStateDomain,
    (commentsState: CommentsState): number =>
      _.get(commentsState, "commentReactionCounter", 0)
  );
export { makeSelectCommentReaction, makeSelectCommentReactionCounter };
