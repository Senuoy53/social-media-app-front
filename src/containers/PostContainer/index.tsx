import PostContainerWrapper from "./PostContainerWrapper";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import { Card, CardActions, Checkbox, IconButton } from "@mui/material";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import PostShowInfo from "../../containers/PostShowInfo";
import PostInputBox from "../../components/PostInputBox";
import CommentsContainer from "../CommentsContainer";
import { createStructuredSelector } from "reselect";
import { makeSelectLoading, makeSelectPostComment, makeSelectRerender } from "../FeedContainer/selectors";
import { useDispatch, useSelector } from "react-redux";
import { requestPostComment } from "../FeedContainer/actions";
import { ReactChild, ReactFragment, useEffect, useState } from "react";


const postCommentState = createStructuredSelector({
  postComment: makeSelectPostComment(),
  rerender: makeSelectRerender(),
  loading: makeSelectLoading()
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
  const {postComment, rerender, loading}:any = useSelector(postCommentState);

  useEffect(() => {
    dispatch(requestPostComment({"postId":postId}));
  }, []);
  

  let seenCommentIds: string[] = []

  const loadMoreComment = () => {
    dispatch(requestPostComment({"postId":postId, "seenCommentIds":seenCommentIds}));
  }
  
  return (
    <PostContainerWrapper>
      {/* JSON.stringify(postComment) */}
      <Card sx={{ margin: 0 }}>
      {postId}
        {/* Post Header */}
        <PostHeader avatar={avatar} title={title} subheader={subheader} />
        {/* Post Body */}
        <PostBody desc={desc} img={img} />
        {/* Show post info */}
        {
          postComment.hasOwnProperty(postId) ? <PostShowInfo postId={postId} commentCount={postComment[postId].total}/>
                                          : <PostShowInfo postId={postId}/>
        }
        {/* Post comment */}
        <div id="CommentsContainer">
          {
            postComment.hasOwnProperty(postId) 
              && (
                postComment[postId].comments.map((comment:any,index:number) =>{
                                                  seenCommentIds.push(comment._id)
                                                  return(
                                                  <CommentsContainer commentObj={comment}/>
                                                  )
                                                }))
          }
        {
            postComment.hasOwnProperty(postId) && 
              (seenCommentIds.length < postComment[postId].total) &&
              (<h4 className='loadMoreButton' onClick={loadMoreComment}>load more comment ...</h4>)
        }
        {loading.isLoading && loading.idOfLoadingPostComment == postId  && <h3>Loading</h3>}
        </div>
        {/* Post input box  */}
        <PostInputBox />
      </Card>
    </PostContainerWrapper>
  );
};

export default PostContainer;


