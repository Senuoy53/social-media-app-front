import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ReactionButton from "../../components/ReactionButton";
import ReactionsCount from "../../components/ReactionsCount";
import PostShowInfoWrapper from "./PostShowInfoWrapper";
import {
  makeSelectPostReaction,
  makeSelectPostReactionCounter,
} from "./selectors";
import {
  setPostReaction,
  postReactionCountPlus,
  postReactionCountMinus,
} from "./actions";
import ShowReactionCounter from "../../components/ShowReactionCounter";

const postShowInfoState = createStructuredSelector({
  postReaction: makeSelectPostReaction(),
  postReactionCounter: makeSelectPostReactionCounter(),
});

const PostShowInfo = () => {
  // Selectors
  const { postReaction, postReactionCounter } = useSelector(postShowInfoState);

  // useDispatch
  const dispatch = useDispatch();

  //   handleClick
  const handleClick = (e: any) => {
    if (e.target.id === "unlike" && postReaction === "unlike") {
      dispatch(postReactionCountPlus());
      dispatch(setPostReaction("like"));
    } else if (e.target.id !== "unlike" && postReaction === "unlike") {
      dispatch(postReactionCountPlus());
      dispatch(setPostReaction(e.target.id));
    } else if (e.target.id === postReaction) {
      dispatch(postReactionCountMinus());
      dispatch(setPostReaction("unlike"));
    } else {
      dispatch(setPostReaction(e.target.id));
    }
  };
  return (
    <PostShowInfoWrapper>
      <div className="right">
        <ReactionButton reaction={postReaction} onClick={handleClick} />
        <ReactionsCount reaction={postReaction} />
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
