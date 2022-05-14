import ReactionButton from "../../components/ReactionButton";
import ReactionsCount from "../../components/ReactionsCount";
import PostShowInfoWrapper from "./PostShowInfoWrapper";

const PostShowInfo = () => {
  return (
    <PostShowInfoWrapper>
      <div className="right">
        <ReactionButton />
        <ReactionsCount />
      </div>
      <div className="left">15 comments</div>
    </PostShowInfoWrapper>
  );
};

export default PostShowInfo;
