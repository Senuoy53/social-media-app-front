import { Avatar, CardHeader } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import CommentHeader from "../../components/CommentHeader";
import PostHeader from "../../components/PostHeader";
import ReactionButton from "../../components/ReactionButton";
import ReactionsCount from "../../components/ReactionsCount";
import ShowReactionCounter from "../../components/ShowReactionCounter";
import {
  commentReactionCountPlus,
  commentReactionCountMinus,
  setCommentReaction,
} from "./actions";
import CommentsContainerWrapper from "./CommentsContainerWrapper";
import {
  makeSelectCommentReaction,
  makeSelectCommentReactionCounter,
} from "./selectors";

import {CommentMsg} from '../../utils/constants'

const commentsState = createStructuredSelector({
  commentReaction: makeSelectCommentReaction(),
  commentReactionCounter: makeSelectCommentReactionCounter(),
});

const CommentsContainer = ({commentObj}:any) => {
  // Selectors
  const { commentReaction, commentReactionCounter } =
    useSelector(commentsState);

  // useDispatch
  const dispatch = useDispatch();

  //   handleClick
  const handleClick = (e: any) => {
    if (e.target.id === "unlike" && commentReaction === "unlike") {
      dispatch(commentReactionCountPlus());
      dispatch(setCommentReaction("like"));
    } else if (e.target.id !== "unlike" && commentReaction === "unlike") {
      dispatch(commentReactionCountPlus());
      dispatch(setCommentReaction(e.target.id));
    } else if (e.target.id === commentReaction) {
      dispatch(commentReactionCountMinus());
      dispatch(setCommentReaction("unlike"));
    } else {
      dispatch(setCommentReaction(e.target.id));
    }
  };

  return (
    <CommentsContainerWrapper>
      
      <div className="com-leftSide">
        <Avatar
          aria-label="recipe"
          src={commentObj.userId.profilePicture}
          sx={{
            width: { xs: "20px", sm: "30px" },
            height: { xs: "20px", sm: "30px" },
          }}
        ></Avatar>
      </div>
      <div className="com-rightSide">
        {/* Comment Header */}
        {/* <CommentHeader fname={commentObj.userId.fname} lname={commentObj.userId.lname} date={commentObj.updatedAt} /> */}
        {/* Comment Body */} 
        <div id="commentBody">{commentObj.comment}</div>
        {/* Comment Bottom */}
        <div id="comBottomContainer">
          {/* Reaction Button */}
          <ReactionButton reaction={commentReaction} onClick={handleClick} />
          {/* Reply button */}
          <div className="CommentButton">{CommentMsg.REPLY}</div>
          {/* Edit button */}
          <div className="CommentButton">{CommentMsg.EDIT}</div>
          {/* Delete button */}
          <div className="CommentButton">{CommentMsg.DELETE}</div>
          {/* Reaction Counter */}
          {commentReactionCounter > 0 && (
            <ShowReactionCounter id="commentReactionCount">
              {commentReactionCounter}
            </ShowReactionCounter>
          )}

          {/* <ReactionsCount reactions={commentReaction} /> */}
        </div>
      </div>
    </CommentsContainerWrapper>
  );
};

export default CommentsContainer;
