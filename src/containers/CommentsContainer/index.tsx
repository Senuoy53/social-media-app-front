import { Avatar, CardHeader } from "@mui/material";
import CommentHeader from "../../components/CommentHeader";
import PostHeader from "../../components/PostHeader";
import ReactionButton from "../../components/ReactionButton";
import ReactionsCount from "../../components/ReactionsCount";
import CommentsContainerWrapper from "./CommentsContainerWrapper";

const CommentsContainer = () => {
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
          <ReactionButton />
          {/* Reply button */}
          <div className="CommentButton">Reply</div>
          {/* Edit button */}
          <div className="CommentButton">Edit</div>
          {/* Delete button */}
          <div className="CommentButton">Delete</div>
          {/* Reaction Counter */}
          <ReactionsCount />
        </div>
      </div>
    </CommentsContainerWrapper>
  );
};

export default CommentsContainer;
