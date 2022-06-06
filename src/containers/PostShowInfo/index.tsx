
import {useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import ReactionButton from "../../components/ReactionButton";
import ReactionsCount from "../../components/ReactionsCount";
import PostShowInfoWrapper from "./PostShowInfoWrapper";


import ShowReactionCounter from "../../components/ShowReactionCounter";
import CommentCounter from "../../components/CommentCounter";


import {
  requestAddReaction,
  requestUpdateReaction,
  requestRemoveReaction,
} from "./actions";

const PostShowInfo = ({
  postReactionsDb,
  currentUser,
  currentPost,
  commentCount=0,
}: PostShowInfoProps) => {
  // useDispatch
  const dispatch = useDispatch();

  const [postReaction, setPostReaction] = useState("unlike");
  const [postReactionCounter, setPostReactionCounter] = useState(0);
  const [reactions, setReactions] = useState<any[]>([]);

  useEffect(() => {
    // console.log("postReactionsDb", postReactionsDb);
    postReactionsDb.map((items: any, index: number) => {
      if (items.userId === currentUser._id) {
        return setPostReaction(items.reaction);
      }
    });
    // console.log("post reaction before : ", postReaction);

    setPostReactionCounter(postReactionsDb.length);

    const data: any[] = [];
    postReactionsDb &&
      postReactionsDb.map((item: any) => {
        data.push(item.reaction);
      });

    setReactions(data);
  }, []);

  //   handleClick
  const handleClick = (e: any) => {
    if (e.target.id === "unlike" && postReaction === "unlike") {
      setPostReactionCounter(postReactionCounter + 1);

      // Delete reaction from list
      const data: any[] = [...reactions];
      // console.log("data", data);
      let indexof = data.indexOf(postReaction);

      // console.log("indexof " + postReaction, indexof);
      if (indexof > -1) {
        data.splice(indexof, 1);
        console.log("data after", data);
        setReactions([...data]);
      }
      // console.log("reactions state after deleting :", reactions);

      setPostReaction("like");
      // Add new reaction to the list
      setReactions([...data, "like"]);

      // === disptach addReaction request ===
      dispatch(
        requestAddReaction({
          postId: currentPost,
          reaction: "like",
        })
      );
    } else if (e.target.id !== "unlike" && postReaction === "unlike") {
      setPostReactionCounter(postReactionCounter + 1);

      // console.log(e.target.id);

      // Delete reaction from list
      const data: any[] = [...reactions];
      // console.log("data", data);
      let indexof = data.indexOf(postReaction);

      // console.log("indexof " + postReaction, indexof);
      if (indexof > -1) {
        data.splice(indexof, 1);
        console.log("data after", data);
        setReactions([...data]);
      }
      // console.log("reactions state after deleting :", reactions);

      // Add new reaction to the list
      setReactions([...data, e.target.id]);
      setPostReaction(e.target.id);

      // === disptach addReaction request ===
      dispatch(
        requestAddReaction({
          postId: currentPost,
          reaction: e.target.id,
        })
      );
    } else if (e.target.id === postReaction) {
      postReactionCounter !== 0 &&
        setPostReactionCounter(postReactionCounter - 1);
      // console.log("postReaction before ", postReaction);
      // Delete reaction from list
      const data: any[] = [...reactions];
      // console.log("data", data);
      let indexof = data.indexOf(postReaction);

      // console.log("indexof " + postReaction, indexof);
      if (indexof > -1) {
        data.splice(indexof, 1);
        console.log("data after", data);
        setReactions([...data]);
      }
      // console.log("reactions state after deleting :", reactions);

      setPostReaction("unlike");
      // console.log(e.target.id);

      // === disptach removeReaction request ===
      dispatch(
        requestRemoveReaction({
          userId: currentUser._id,
          postId: currentPost,
        })
      );
    } else {
      // Delete reaction from list
      const data: any[] = [...reactions];
      // console.log("data", data);
      let indexof = data.indexOf(postReaction);

      // console.log("indexof " + postReaction, indexof);
      if (indexof > -1) {
        data.splice(indexof, 1);
        // console.log("data after", data);
        setReactions([...data]);
      }
      // console.log("reactions state after deleting :", reactions);

      // Add new reaction to the list
      setReactions([...data, e.target.id]);
      setPostReaction(e.target.id);
      // console.log(e.target.id);

      // === disptach updateReaction request ===
      dispatch(
        requestUpdateReaction({
          userId: currentUser._id,
          postId: currentPost,
          reaction: e.target.id,
        })
      );
    }
  };

  // console.log("Reactions state", reactions);
  return (
    <PostShowInfoWrapper>
      <div className="right">
        <ReactionButton reaction={postReaction} onClick={handleClick} />
        <ReactionsCount reactions={reactions} />
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
