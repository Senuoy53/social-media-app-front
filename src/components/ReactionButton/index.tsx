import ReactionButtonWrapper from "./ReactionButtonWrapper";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as fasThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import ReactionHover from "../ReactionHover";

import loveSvg from "../../assets/img/svg-icon/facebook-love.svg";
import wowSvg from "../../assets/img/svg-icon/facebook-reaction-wow.svg";
import hahaSvg from "../../assets/img/svg-icon/facebook-haha.svg";
import sadSvg from "../../assets/img/svg-icon/facebook-reaction-sad.svg";
import angrySvg from "../../assets/img/svg-icon/facebook-angry.svg";

import CustomReactionBtn from "../CustomReactionBtn";

const ReactionButton = () => {
  const [reaction, setReaction] = useState("unlike");

  //   handleClick
  const handleClick = (e: any) => {
    switch (e.target.id) {
      case "unlike":
        if (reaction === "unlike") return setReaction("like");
        setReaction("unlike");
        break;
      case "like":
        if (reaction === "like") return setReaction("unlike");
        setReaction("like");
        break;
      case "love":
        if (reaction === "love") return setReaction("unlike");
        setReaction("love");
        break;
      case "wow":
        if (reaction === "wow") return setReaction("unlike");
        setReaction("wow");
        break;
      case "haha":
        if (reaction === "haha") return setReaction("unlike");
        setReaction("haha");
        break;
      case "sad":
        if (reaction === "sad") return setReaction("unlike");
        setReaction("sad");
        break;
      case "angry":
        if (reaction === "angry") return setReaction("unlike");
        setReaction("angry");
        break;
      default:
        break;
    }
  };

  return (
    <ReactionButtonWrapper>
      {reaction === "unlike" && (
        <div className="like-button regular" onClick={handleClick} id="unlike">
          <FontAwesomeIcon
            icon={fasThumbsUp}
            className="like-icon"
            id="unlike"
          />
          <span className="like-text" id="unlike">
            Like
          </span>
        </div>
      )}

      {reaction === "like" && (
        <div className="like-button solid" onClick={handleClick} id="like">
          <FontAwesomeIcon icon={faThumbsUp} className="like-icon" id="like" />
          <span className="like-text" id="like">
            Like
          </span>
        </div>
      )}

      {reaction === "love" && (
        <CustomReactionBtn
          className="btn love-button"
          SvgImg={loveSvg}
          id="love"
          text="Love"
          onClick={handleClick}
        />
      )}

      {reaction === "wow" && (
        <CustomReactionBtn
          className="btn yellow-button"
          SvgImg={wowSvg}
          id="wow"
          text="Wow"
          onClick={handleClick}
        />
      )}

      {reaction === "haha" && (
        <CustomReactionBtn
          className="btn yellow-button"
          SvgImg={hahaSvg}
          id="haha"
          text="Haha"
          onClick={handleClick}
        />
      )}

      {reaction === "sad" && (
        <CustomReactionBtn
          className="btn yellow-button"
          SvgImg={sadSvg}
          id="sad"
          text="Sad"
          onClick={handleClick}
        />
      )}

      {reaction === "angry" && (
        <CustomReactionBtn
          className="btn angry-button"
          SvgImg={angrySvg}
          id="angry"
          text="Angry"
          onClick={handleClick}
        />
      )}

      <div className="hover-like-img">
        <ReactionHover onClick={handleClick} />
      </div>
    </ReactionButtonWrapper>
  );
};

export default ReactionButton;
