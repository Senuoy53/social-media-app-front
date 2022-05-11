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
  const [unlike, setUnlike] = useState(true);
  const [like, setLike] = useState(false);
  const [love, setLove] = useState(false);
  const [wow, setWow] = useState(false);
  const [haha, setHaha] = useState(false);
  const [sad, setSad] = useState(false);
  const [angry, setAngry] = useState(false);

  //   handleClick
  const handleClick = (e: any) => {
    switch (e.target.id) {
      case "unlike":
        setLike(true);
        setUnlike(!unlike);
        setLove(false);
        setWow(false);
        setHaha(false);
        setSad(false);
        setAngry(false);
        break;
      case "like":
        if (like) {
          setUnlike(true);
        } else {
          setUnlike(false);
        }
        setLike(!like);
        setLove(false);
        setWow(false);
        setHaha(false);
        setSad(false);
        setAngry(false);
        break;
      case "love":
        if (love) {
          setUnlike(true);
        } else {
          setUnlike(false);
        }
        setLove(!love);
        setLike(false);
        setWow(false);
        setHaha(false);
        setSad(false);
        setAngry(false);
        break;
      case "wow":
        if (wow) {
          setUnlike(true);
        } else {
          setUnlike(false);
        }
        setWow(!wow);
        setLike(false);
        setLove(false);
        setHaha(false);
        setSad(false);
        setAngry(false);
        break;
      case "haha":
        if (haha) {
          setUnlike(true);
        } else {
          setUnlike(false);
        }
        setHaha(!haha);
        setLike(false);
        setLove(false);
        setWow(false);
        setSad(false);
        setAngry(false);
        break;
      case "sad":
        if (sad) {
          setUnlike(true);
        } else {
          setUnlike(false);
        }
        setSad(!sad);
        setLike(false);
        setLove(false);
        setWow(false);
        setHaha(false);
        setAngry(false);
        break;
      case "angry":
        if (angry) {
          setUnlike(true);
        } else {
          setUnlike(false);
        }
        setAngry(!angry);
        setLike(false);
        setLove(false);
        setWow(false);
        setHaha(false);
        setSad(false);

        break;
      default:
        break;
    }
    // setLike(!like);
  };

  return (
    <ReactionButtonWrapper>
      {unlike && (
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

      {like && (
        <div className="like-button solid" onClick={handleClick} id="like">
          <FontAwesomeIcon icon={faThumbsUp} className="like-icon" id="like" />
          <span className="like-text" id="like">
            Like
          </span>
        </div>
      )}

      {love && (
        <CustomReactionBtn
          className="btn love-button"
          SvgImg={loveSvg}
          id="love"
          text="Love"
          onClick={handleClick}
        />
      )}

      {wow && (
        <CustomReactionBtn
          className="btn yellow-button"
          SvgImg={wowSvg}
          id="wow"
          text="Wow"
          onClick={handleClick}
        />
      )}

      {haha && (
        <CustomReactionBtn
          className="btn yellow-button"
          SvgImg={hahaSvg}
          id="haha"
          text="Haha"
          onClick={handleClick}
        />
      )}

      {sad && (
        <CustomReactionBtn
          className="btn yellow-button"
          SvgImg={sadSvg}
          id="sad"
          text="Sad"
          onClick={handleClick}
        />
      )}

      {angry && (
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
