import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ReactionButton from "../../components/ReactionButton";
import ReactionsCount from "../../components/ReactionsCount";
import PostShowInfoWrapper from "./PostShowInfoWrapper";
import {
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectLoading,
  makeSelectpostCommentCount,
  makeSelectPostReaction,
  makeSelectPostReactionCounter,
} from "./selectors";
import {
  setPostReaction,
  postReactionCountPlus,
  postReactionCountMinus,
  requestPostCommentCount,
} from "./actions";
import ShowReactionCounter from "../../components/ShowReactionCounter";
import CommentCounter from "../../components/CommentCounter";

const postShowInfoState = createStructuredSelector({
  postReaction: makeSelectPostReaction(),
  postReactionCounter: makeSelectPostReactionCounter(),
  postCommentCount: makeSelectpostCommentCount(),
  error: makeSelectError(),
  errorMessage: makeSelectErrorMessage(),
  loading: makeSelectLoading(),
});

const PostShowInfo = () => {
  // Selectors
  const { postReaction, postReactionCounter, postCommentCount, error, errorMessage, loading } = useSelector(postShowInfoState);

  // useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPostCommentCount('628be480233e5536f33ba7e9'))
  },[])

  //   handleClick
  const handleClick = (e: any) => {
    if (e.target.id === "unlike" && postReaction === "unlike") {
      dispatch(postReactionCountPlus());
      dispatch(setPostReaction("like"));
    } else if (e.target.id !== "unlike" && postReaction === "unlike") {
      dispatch(postReactionCountPlus());
      dispatch(setPostReaction(e.target.id));
    } else if (e.target.id === postReaction) {
      dispatch(postReactionCountMinus());
      dispatch(setPostReaction("unlike"));
    } else {
      dispatch(setPostReaction(e.target.id));
    }
  };
  return (
    <PostShowInfoWrapper>
      <div className="right">
        <ReactionButton reaction={postReaction} onClick={handleClick} />
        <ReactionsCount reaction={postReaction} />
        {postReactionCounter > 0 && (
          <ShowReactionCounter id="postReactionCount">
            {postReactionCounter}
          </ShowReactionCounter>
        )}
      </div>
      <CommentCounter count={postCommentCount} />
    </PostShowInfoWrapper>
  );
};

export default PostShowInfo;
