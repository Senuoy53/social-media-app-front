import PostContainerWrapper from "./PostContainerWrapper";
import { Card } from "@mui/material";
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
import { forwardRef } from "react";
import { TypeReferenceType } from "typescript";


const postCommentState = createStructuredSelector({
  postComment: makeSelectPostComment(),
  rerender: makeSelectRerender(),
  loading: makeSelectLoading()
});

const PostContainer = forwardRef<any, any>(
  (
    // avatar,
    // title,
    // subheader,
    // desc,
    // img,
    // postReactionsDb,
    // currentUser,
    // currentPost,
    props,
    ref
  ) => {
    
    const dispatch = useDispatch();
    const {postComment, rerender, loading}:any = useSelector(postCommentState);

    useEffect(() => {
      dispatch(requestPostComment({"postId":props.currentPost}));
    }, []);


    let seenCommentIds: string[] = []

    const loadMoreComment = () => {
      dispatch(requestPostComment({"postId":props.currentPost, "seenCommentIds":seenCommentIds}));
    }
  
   return (
    <PostContainerWrapper ref={ref}>
      {/* JSON.stringify(postComment) */}
      <Card sx={{ margin: 0 }}>
      {props.currentPost}
        {/* Post Header */}
        <PostHeader avatar={props.avatar} title={props.title} subheader={props.subheader} />
        {/* Post Body */}
        <PostBody desc={props.desc} img={props.img} />
        {/* Show post info */}
        {
          postComment.hasOwnProperty(props.currentPost) ? <PostShowInfo postId={props.currentPost} commentCount={postComment[props.currentPost].total}/>
                                          : <PostShowInfo postId={props.currentPost}/>
        }
        {/* Post comment */}
        <div id="CommentsContainer">
          {
            postComment.hasOwnProperty(props.currentPost) 
              && (
                postComment[props.currentPost].comments.map((comment:any,index:number) =>{
                                                  seenCommentIds.push(comment._id)
                                                  return(
                                                  <CommentsContainer commentObj={comment}/>
                                                  )
                                                }))
          }
        {
            postComment.hasOwnProperty(props.currentPost) && 
              (seenCommentIds.length < postComment[props.currentPost].total) &&
              (<h4 className='loadMoreButton' onClick={loadMoreComment}>load more comment ...</h4>)
        }
        {loading.isLoading && loading.idOfLoadingPostComment == props.currentPost  && <h3>Loading</h3>}
        </div>
        {/* Post input box  */}
        <PostInputBox />
      </Card>
    </PostContainerWrapper>
  );

      })

export default PostContainer;


