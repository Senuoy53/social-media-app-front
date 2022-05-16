import ReactionButtonWrapper from "./ReactionButtonWrapper";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as fasThumbsUp } from "@fortawesome/free-regular-svg-icons";
import ReactionHover from "../ReactionHover";

import loveSvg from "../../assets/img/svg-icon/facebook-love.svg";
import wowSvg from "../../assets/img/svg-icon/facebook-reaction-wow.svg";
import hahaSvg from "../../assets/img/svg-icon/facebook-haha.svg";
import sadSvg from "../../assets/img/svg-icon/facebook-reaction-sad.svg";
import angrySvg from "../../assets/img/svg-icon/facebook-angry.svg";

import CustomReactionBtn from "../CustomReactionBtn";

const ReactionButton = ({ reaction, onClick }: ReactionButtonProps) => {
  return (
    <ReactionButtonWrapper>
      {reaction === "unlike" && (
        <div className="like-button regular" onClick={onClick} id="unlike">
          <FontAwesomeIcon icon={fasThumbsUp} className="like-icon" />
          <span className="like-text">Like</span>
        </div>
      )}

      {reaction === "like" && (
        <div className="like-button solid" onClick={onClick} id="like">
          <FontAwesomeIcon icon={faThumbsUp} className="like-icon" />
          <span className="like-text">Like</span>
        </div>
      )}

      {reaction === "love" && (
        <CustomReactionBtn
          className="btn love-button"
          SvgImg={loveSvg}
          id="love"
          text="Love"
          onClick={onClick}
        />
      )}

      {reaction === "wow" && (
        <CustomReactionBtn
          className="btn yellow-button"
          SvgImg={wowSvg}
          id="wow"
          text="Wow"
          onClick={onClick}
        />
      )}

      {reaction === "haha" && (
        <CustomReactionBtn
          className="btn yellow-button"
          SvgImg={hahaSvg}
          id="haha"
          text="Haha"
          onClick={onClick}
        />
      )}

      {reaction === "sad" && (
        <CustomReactionBtn
          className="btn yellow-button"
          SvgImg={sadSvg}
          id="sad"
          text="Sad"
          onClick={onClick}
        />
      )}

      {reaction === "angry" && (
        <CustomReactionBtn
          className="btn angry-button"
          SvgImg={angrySvg}
          id="angry"
          text="Angry"
          onClick={onClick}
        />
      )}

      <div className="hover-like-img">
        <ReactionHover onClick={onClick} />
      </div>
    </ReactionButtonWrapper>
  );
};

export default ReactionButton;
