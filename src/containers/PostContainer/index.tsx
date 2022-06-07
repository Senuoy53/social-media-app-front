import PostContainerWrapper from "./PostContainerWrapper";
import { Card } from "@mui/material";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import PostShowInfo from "../../containers/PostShowInfo";
import PostInputBox from "../../components/PostInputBox";
import CommentsContainer from "../CommentsContainer";
import { createStructuredSelector } from "reselect";
import {
  makeSelectLoading,
  makeSelectPostComment,
  makeSelectRerender,
} from "../FeedContainer/selectors";
import { useDispatch, useSelector } from "react-redux";
import { requestPostComment } from "../FeedContainer/actions";
import { ReactChild, ReactFragment, useEffect, useState } from "react";
import { forwardRef } from "react";
import { TypeReferenceType } from "typescript";
import { postNewComment } from "./actions";

const postCommentState = createStructuredSelector({
  postComment: makeSelectPostComment(),
  rerender: makeSelectRerender(),
  loading: makeSelectLoading(),
});

const PostContainer = forwardRef<any, any>(
  (
    props,
    ref
  ) => {
    const dispatch = useDispatch();
    const { postComment, rerender, loading }: any =
      useSelector(postCommentState);

    useEffect(() => {
      dispatch(requestPostComment({ postId: props.currentPost }));
    }, []);

    let seenCommentIds: string[] = [];

    const loadMoreComment = () => {
      dispatch(
        requestPostComment({
          postId: props.currentPost,
          seenCommentIds: seenCommentIds,
        })
      );
    };

    const [newComments, setNewComments] = useState([] as any[])

    

    const handleClickPostNewComment = (values: any)=> {
      dispatch(postNewComment({
        'postId': props.currentPost,
        'comment': values.commentInput
      }))
      if (typeof window.localStorage !== "undefined") {
        let jwt = JSON.parse(localStorage.getItem("jwt")!);
        let newCommentToPush = {
                                'userId':{
                                  '_id': jwt.user._id,
                                  'fname': jwt.user.fname,
                                  'lname': jwt.user.lname,
                                  'profilePicture': jwt.user.profilePicture,
                                },
                                comment: values.commentInput,
                                updatedAt: new Date()
                              }
        setNewComments([...newComments, newCommentToPush])
      }else{
        return
      }
    };

    return (
      <PostContainerWrapper ref={ref}>
        {/* JSON.stringify(postComment) */}
        
        <Card sx={{ margin: 0 }}>
          {/* Post Header */}
          <PostHeader
            avatar={props.avatar}
            title={props.title}
            subheader={props.subheader}
          />
          {/* Post Body */}
          <PostBody desc={props.desc} img={props.img} />
          {/* Show post info */}
          {postComment.hasOwnProperty(props.currentPost) ? (
            <PostShowInfo
              currentPost={props.currentPost}
              commentCount={postComment[props.currentPost].total}
              postReactionsDb={props.postReactionsDb}
              currentUser={props.currentUser}
            />
          ) : (
            <PostShowInfo
              currentPost={props.currentPost}
              postReactionsDb={props.postReactionsDb}
              currentUser={props.currentUser}
            />
          )}
          {/* Post comment */}
          <div id="CommentsContainer">
            {newComments.length > 0 &&
               newComments.map((comment:any,index:number)=>
                                  <CommentsContainer index={index} commentObj={comment} />)}
            {postComment.hasOwnProperty(props.currentPost) &&
              postComment[props.currentPost].comments.map(
                (comment: any, index: number) => {
                  seenCommentIds.push(comment._id);
                  return <CommentsContainer index={index} commentObj={comment} />;
                }
              )}
            {postComment.hasOwnProperty(props.currentPost) &&
              seenCommentIds.length < postComment[props.currentPost].total && (
                <h4 className="loadMoreButton" onClick={loadMoreComment}>
                  load more comment ...
                </h4>
              )}
            {loading.isLoading &&
              loading.idOfLoadingPostComment == props.currentPost && (
                <h3>Loading</h3>
              )}
          </div>
          {/* Post input box  */}
          <PostInputBox handleClickPostNewComment={handleClickPostNewComment}/>
        </Card>
      </PostContainerWrapper>
    );
  }
);

export default PostContainer;
