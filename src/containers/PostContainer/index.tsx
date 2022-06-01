import PostContainerWrapper from "./PostContainerWrapper";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import { Card, CardActions, Checkbox, IconButton } from "@mui/material";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import PostShowInfo from "../../containers/PostShowInfo";
import PostInputBox from "../../components/PostInputBox";
import CommentsContainer from "../CommentsContainer";
import { createStructuredSelector } from "reselect";
import { makeSelectPostComment } from "../FeedContainer/selectors";
import { useDispatch, useSelector } from "react-redux";
import { requestPostComment } from "../FeedContainer/actions";
import { useEffect } from "react";


const postCommentState = createStructuredSelector({
  postComment: makeSelectPostComment(),
});

const PostContainer = ({
  avatar,
  title,
  subheader,
  desc,
  img,
  postId
}: PostContainerProps) => {

  const dispatch = useDispatch();
  const {postComment} = useSelector(postCommentState);

  useEffect(() => {
    dispatch(requestPostComment(postId));
  }, []);

  return (
    <PostContainerWrapper>
      {<h4>{JSON.stringify(postComment)}</h4>} 
      <Card sx={{ margin: 0 }}>
        {/* Post Header */}
        {postId}
        <PostHeader avatar={avatar} title={title} subheader={subheader} />
        {/* Post Body */}
        <PostBody desc={desc} img={img} />
        {/* Show post info */}
        <PostShowInfo postId={postId}/>
        {/* Comments Container */}
        <div id="CommentsContainer">
          <CommentsContainer />
          <CommentsContainer />
          <CommentsContainer />
        </div>

        {/* Post input box  */}
        <PostInputBox />
      </Card>
    </PostContainerWrapper>
  );
};

export default PostContainer;
