import { createSelector } from "reselect";
import { GlobalState } from "../../utils/types";

import _ from "lodash";

const selectFromPostCommentStateDomain = (
  globalState: GlobalState
): PostCommentState => globalState.postCommentState;

const makeSelectPostComment = () =>
  createSelector(
    selectFromPostCommentStateDomain,
    (PostCommentState: PostCommentState): number =>
      _.get(PostCommentState, "postComment", 
      {'defaultPostId': {   
        total: 0,
        comments:['defaultComment']
    }})
  );
const makeSelectError = () =>
  createSelector(
    selectFromPostCommentStateDomain,
    (PostCommentState: PostCommentState): boolean =>
      _.get(PostCommentState, "error", false)
  );
const makeSelectErrorMessage = () =>
  createSelector(
    selectFromPostCommentStateDomain,
    (PostCommentState: PostCommentState): string =>
      _.get(PostCommentState, "errorMessage", '')
  );
const makeSelectLoading = () =>
  createSelector(
    selectFromPostCommentStateDomain,
    (PostCommentState: PostCommentState): boolean =>
      _.get(PostCommentState, "loading", { isLoading: false,
        idOfLoadingPostComment: ""
       })
  );

const makeSelectRerender = () =>
  createSelector(
    selectFromPostCommentStateDomain,
    (PostCommentState: PostCommentState): number =>
      _.get(PostCommentState, "rerender", 0)
  );


export {
    makeSelectPostComment,
    makeSelectError,
    makeSelectErrorMessage,
    makeSelectLoading,
    makeSelectRerender,
};
