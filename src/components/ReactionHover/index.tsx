import ReactionHoverWrapper from "./ReactionHoverWrapper";
import likeGif from "../../assets/img/facebook-react-gif/like.gif";
import loveGif from "../../assets/img/facebook-react-gif/love.gif";
import wowGif from "../../assets/img/facebook-react-gif/wow.gif";
import hahaGif from "../../assets/img/facebook-react-gif/haha.gif";
import sadGif from "../../assets/img/facebook-react-gif/sad.gif";
import angryGif from "../../assets/img/facebook-react-gif/angry.gif";
import ImgGif from "../ImgGif";

const ReactionHover = ({ onClick }: ReactionHoverProps) => {
  return (
    <ReactionHoverWrapper>
      <ImgGif
        className="like-gif-img"
        imgGif={likeGif}
        id="like"
        onClick={onClick}
      />

      <ImgGif
        className="love-gif-img"
        imgGif={loveGif}
        id="love"
        onClick={onClick}
      />

      <ImgGif
        className="wow-gif-img"
        imgGif={wowGif}
        id="wow"
        onClick={onClick}
      />

      <ImgGif
        className="haha-gif-img"
        imgGif={hahaGif}
        id="haha"
        onClick={onClick}
      />

      <ImgGif
        className="sad-gif-img"
        imgGif={sadGif}
        id="sad"
        onClick={onClick}
      />

      <ImgGif
        className="angry-gif-img"
        imgGif={angryGif}
        id="angry"
        onClick={onClick}
      />
    </ReactionHoverWrapper>
  );
};

export default ReactionHover;
