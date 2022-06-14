import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import CommentHeader from "../../components/CommentHeader";
import ReactionButton from "../../components/ReactionButton";
import ReactionsCount from "../../components/ReactionsCount";
import ShowReactionCounter from "../../components/ShowReactionCounter";
import {
  requestAddCommentReaction,
  requestUpdateCommentReaction,
  requestRemoveCommentReaction,
} from "./actions";
import CommentsContainerWrapper from "./CommentsContainerWrapper";

import { CommentMsg } from "../../utils/constants";
import { useEffect, useState } from "react";

const CommentsContainer = ({ index, commentObj, currentUser }: any) => {
  // console.log("commentObj", commentObj);

  // useDispatch
  const dispatch = useDispatch();

  const [commentReaction, setCommentReaction] = useState("unlike");
  const [commentReactionCounter, setCommentReactionCounter] = useState(0);
  const [reactions, setReactions] = useState<any[]>([]);

  useEffect(() => {
    // console.log("postReactionsDb", postReactionsDb);
    // console.log("commentObj.postId : ", commentObj.postId);
    commentObj?.reactions?.map((items: any, index: number) => {
      if (items.userId === currentUser._id) {
        return setCommentReaction(items.reaction);
      }
    });
    // console.log("post reaction before : ", postReaction);

    setCommentReactionCounter(commentObj?.reactions?.length);

    const data: any[] = [];
    commentObj.reactions &&
      commentObj.reactions.map((item: any) => {
        data.push(item.reaction);
      });

    setReactions(data);
  }, []);

  //   handleClick
  const handleClick = (e: any) => {
    if (e.target.id === "unlike" && commentReaction === "unlike") {
      setCommentReactionCounter(commentReactionCounter + 1);

      // Delete reaction from list
      const data: any[] = [...reactions];
      // console.log("data", data);
      let indexof = data.indexOf(commentReaction);

      // console.log("indexof " + postReaction, indexof);
      if (indexof > -1) {
        data.splice(indexof, 1);
        // console.log("data after", data);
        setReactions([...data]);
      }
      // console.log("reactions state after deleting :", reactions);

      setCommentReaction("like");
      // Add new reaction to the list
      setReactions([...data, "like"]);

      // === disptach addReaction request ===
      dispatch(
        requestAddCommentReaction({
          postId: commentObj.postId,
          commentId: commentObj._id,
          reaction: "like",
        })
      );
    } else if (e.target.id !== "unlike" && commentReaction === "unlike") {
      setCommentReactionCounter(commentReactionCounter + 1);

      // console.log(e.target.id);

      // Delete reaction from list
      const data: any[] = [...reactions];
      // console.log("data", data);
      let indexof = data.indexOf(commentReaction);

      // console.log("indexof " + postReaction, indexof);
      if (indexof > -1) {
        data.splice(indexof, 1);
        console.log("data after", data);
        setReactions([...data]);
      }
      // console.log("reactions state after deleting :", reactions);

      // Add new reaction to the list
      setReactions([...data, e.target.id]);
      setCommentReaction(e.target.id);

      // === disptach addReaction request ===
      dispatch(
        requestAddCommentReaction({
          postId: commentObj.postId,
          commentId: commentObj._id,
          reaction: e.target.id,
        })
      );
    } else if (e.target.id === commentReaction) {
      commentReactionCounter !== 0 &&
        setCommentReactionCounter(commentReactionCounter - 1);
      // console.log("postReaction before ", postReaction);
      // Delete reaction from list
      const data: any[] = [...reactions];
      // console.log("data", data);
      let indexof = data.indexOf(commentReaction);

      // console.log("indexof " + postReaction, indexof);
      if (indexof > -1) {
        data.splice(indexof, 1);
        // console.log("data after", data);
        setReactions([...data]);
      }
      // console.log("reactions state after deleting :", reactions);

      setCommentReaction("unlike");
      // console.log(e.target.id);

      // === disptach removeReaction request ===
      dispatch(
        requestRemoveCommentReaction({
          userId: currentUser._id,
          commentId: commentObj._id,
        })
      );
    } else {
      // Delete reaction from list
      const data: any[] = [...reactions];
      // console.log("data", data);
      let indexof = data.indexOf(commentReaction);

      // console.log("indexof " + postReaction, indexof);
      if (indexof > -1) {
        data.splice(indexof, 1);
        // console.log("data after", data);
        setReactions([...data]);
      }
      // console.log("reactions state after deleting :", reactions);

      // Add new reaction to the list
      setReactions([...data, e.target.id]);
      setCommentReaction(e.target.id);
      // console.log(e.target.id);

      // === disptach updateReaction request ===
      dispatch(
        requestUpdateCommentReaction({
          userId: currentUser._id,
          commentId: commentObj._id,
          reaction: e.target.id,
        })
      );
    }
  };

  return (
    <CommentsContainerWrapper>
      <div className="com-leftSide" key={index}>
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
        {
          <CommentHeader
            fname={commentObj.userId.fname}
            lname={commentObj.userId.lname}
            date={commentObj.updatedAt}
          />
        }
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
          <ReactionsCount className="cmReactionCount" reactions={reactions} />
        </div>
      </div>
    </CommentsContainerWrapper>
  );
};

export default CommentsContainer;
