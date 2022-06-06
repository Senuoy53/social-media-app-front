import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ReactionButton from "../../components/ReactionButton";
import ReactionsCount from "../../components/ReactionsCount";
import PostShowInfoWrapper from "./PostShowInfoWrapper";

import ShowReactionCounter from "../../components/ShowReactionCounter";
import CommentCounter from "../../components/CommentCounter";
import { makeSelectPostReaction, makeSelectPostReactionCounter } from './selectors';
import { postReactionCountMinus, postReactionCountPlus, setPostReaction } from './actions';

const postShowInfoState = createStructuredSelector({
  postReaction: makeSelectPostReaction(),
  postReactionCounter: makeSelectPostReactionCounter()
});

const PostShowInfo = ({postId, commentCount=0}:PostShowInfoProp) => {
  // Selectors
  const { postReaction, postReactionCounter} = useSelector(postShowInfoState);

  // useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
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
      <CommentCounter count={commentCount} />
    </PostShowInfoWrapper>
  );
};

export default PostShowInfo;
