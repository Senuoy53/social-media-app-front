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
import { useDispatch, useSelector } from "react-redux";
import {
  reactionCountPlus,
  reactionCountMinus,
} from "../ReactionsCount/actions";
import { setReaction } from "./actions";
import { createStructuredSelector } from "reselect";
import { makeSelectReaction } from "./selectors";

const reactionButtonState = createStructuredSelector({
  reaction: makeSelectReaction(),
});

const ReactionButton = () => {
  // Selectors
  const { reaction } = useSelector(reactionButtonState);

  // useDispatch
  const dispatch = useDispatch();

  //   handleClick
  const handleClick = (e: any) => {
    if (e.target.id === "unlike" && reaction === "unlike") {
      dispatch(reactionCountPlus());
      dispatch(setReaction("like"));
    } else if (e.target.id !== "unlike" && reaction === "unlike") {
      dispatch(reactionCountPlus());
      dispatch(setReaction(e.target.id));
    } else if (e.target.id === reaction) {
      dispatch(reactionCountMinus());
      dispatch(setReaction("unlike"));
    } else {
      dispatch(setReaction(e.target.id));
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
