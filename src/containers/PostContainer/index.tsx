import PostContainerWrapper from "./PostContainerWrapper";
import { Card } from "@mui/material";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import PostShowInfo from "../../containers/PostShowInfo";
import PostInputBox from "../../components/PostInputBox";
import CommentsContainer from "../CommentsContainer";
import { forwardRef } from "react";
import { TypeReferenceType } from "typescript";

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
    return (
      <PostContainerWrapper ref={ref}>
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
          <PostShowInfo
            postReactionsDb={props.postReactionsDb}
            currentUser={props.currentUser}
            currentPost={props.currentPost}
          />
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
  }
  // console.log("postReactionsDb", postReactionsDb);
);

export default PostContainer;
