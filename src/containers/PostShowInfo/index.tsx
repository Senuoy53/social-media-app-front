import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ReactionButton from "../../components/ReactionButton";
import ReactionsCount from "../../components/ReactionsCount";
import PostShowInfoWrapper from "./PostShowInfoWrapper";
import {
  makeSelectPostReactions,
  makeSelectPostReactionCounter,
} from "./selectors";
import {
  setPostReaction,
  postReactionCountPlus,
  postReactionCountMinus,
} from "./actions";
import ShowReactionCounter from "../../components/ShowReactionCounter";
import { useEffect, useState } from "react";

// const postShowInfoState = createStructuredSelector({
//   postReactions: makeSelectPostReactions(),
//   postReactionCounter: makeSelectPostReactionCounter(),
// });

const PostShowInfo = ({
  postReactionsDb,
  currentUser,
  currentPost,
}: PostShowInfoProps) => {
  // Selectors
  // const { postReactions, postReactionCounter } = useSelector(postShowInfoState);

  // useDispatch
  const dispatch = useDispatch();
  // console.log("post show infopostReactionsDb", postReactionsDb);
  // console.log("currentuser", currentUser._id);
  const [postReaction, setPostReaction] = useState("unlike");
  const [postReactionCounter, setPostReactionCounter] = useState(0);
  const [reactions, setReactions] = useState<any[]>([]);

  useEffect(() => {
    console.log("postReactionsDb", postReactionsDb);
    postReactionsDb.map((items: any, index: number) => {
      if (items.userId === currentUser._id) {
        return setPostReaction(items.reaction);
      }
    });
    setPostReactionCounter(postReactionsDb.length);

    const data: any[] = [];
    postReactionsDb &&
      postReactionsDb.map((item: any) => {
        data.push(item.reaction);
      });

    setReactions(data);
  }, []);

  // console.log("PostReaction :", postReaction);
  console.log("Reactions state", reactions);

  //   handleClick
  const handleClick = (e: any) => {
    if (e.target.id === "unlike" && postReaction === "unlike") {
      setPostReactionCounter(postReactionCounter + 1);
      setPostReaction("like");
      console.log(e.target.id);

      // remove element from list
      if (reactions.includes("like")) {
        const data: any[] = reactions;
        data.filter((item) => {
          return item !== "like";
        });
        console.log("include like", data);
        setReactions([...data]);

        // add element from list
      } else {
        setReactions([...reactions, "like"]);
      }
    } else if (e.target.id !== "unlike" && postReaction === "unlike") {
      setPostReactionCounter(postReactionCounter + 1);
      setPostReaction(e.target.id);

      console.log(e.target.id);

      // remove element from list
      // if (reactions.includes(e.target.id)) {
      //   const data: any[] = [...reactions];
      //   console.log("data after filter", data);
      //   const filterdData = data.filter((item) => {
      //     return item !== e.target.id;
      //   });

      //   setReactions(filterdData);
      // } else {
      //   console.log(" include", e.target.id);
      //   setReactions([...reactions, e.target.id]);
      // }
    } else if (e.target.id === postReaction) {
      postReactionCounter !== 0 &&
        setPostReactionCounter(postReactionCounter - 1);
      setPostReaction("unlike");
      console.log(e.target.id);

      // remove element from list
      // if (reactions.includes(e.target.id)) {
      //   const data: any[] = [...reactions];
      //   console.log("data after filter", data);
      //   const filterdData = data.filter((item) => {
      //     return item !== e.target.id;
      //   });

      //   setReactions(filterdData);
      // }
    } else {
      setPostReaction(e.target.id);
      console.log(e.target.id);

      // remove element from list
      if (reactions.includes(e.target.id)) {
        const data: any[] = [...reactions];
        console.log("data after filter", data);
        const filterdData = data.filter((item) => {
          return item !== e.target.id;
        });

        setReactions(filterdData);
      } else {
        console.log(" include", e.target.id);
        setReactions([...reactions, e.target.id]);
      }
    }
  };
  return (
    // <PostShowInfoWrapper>
    //   <div className="right">
    //     <ReactionButton reaction={postReaction} onClick={handleClick} />
    //     <ReactionsCount reaction={postReaction} />
    //     {postReactionCounter > 0 && (
    //       <ShowReactionCounter id="postReactionCount">
    //         {postReactionCounter}
    //       </ShowReactionCounter>
    //     )}
    //   </div>
    //   <div className="left">15 comments</div>
    // </PostShowInfoWrapper>
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
      <div className="left">15 comments</div>
    </PostShowInfoWrapper>
  );
};

export default PostShowInfo;
