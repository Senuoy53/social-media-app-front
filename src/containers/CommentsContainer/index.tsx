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

const commentsState = createStructuredSelector({
  commentReaction: makeSelectCommentReaction(),
  commentReactionCounter: makeSelectCommentReactionCounter(),
});

const CommentsContainer = () => {
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
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sx={{
            width: { xs: "20px", sm: "30px" },
            height: { xs: "20px", sm: "30px" },
          }}
        ></Avatar>
      </div>
      <div className="com-rightSide">
        {/* Comment Header */}
        <CommentHeader />
        {/* Comment Body */}
        <div id="commentBody">First Comment</div>
        {/* Comment Bottom */}
        <div id="comBottomContainer">
          {/* Reaction Button */}
          <ReactionButton reaction={commentReaction} onClick={handleClick} />
          {/* Reply button */}
          <div className="CommentButton">Reply</div>
          {/* Edit button */}
          <div className="CommentButton">Edit</div>
          {/* Delete button */}
          <div className="CommentButton">Delete</div>
          {/* Reaction Counter */}
          {commentReactionCounter > 0 && (
            <ShowReactionCounter id="commentReactionCount">
              {commentReactionCounter}
            </ShowReactionCounter>
          )}

          <ReactionsCount reaction={commentReaction} />
        </div>
      </div>
    </CommentsContainerWrapper>
  );
};

export default CommentsContainer;
