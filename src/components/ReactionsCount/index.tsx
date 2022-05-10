import ReactionsCountWrapper from "./ReactionsCountWrapper";
import like from "../../assets/img/svg-icon/facebook-reaction-like.svg";
import love from "../../assets/img/svg-icon/facebook-love.svg";
import wow from "../../assets/img/svg-icon/facebook-wow.svg";
import haha from "../../assets/img/svg-icon/facebook-haha.svg";
import sad from "../../assets/img/svg-icon/facebook-reaction-sad.svg";
import angry from "../../assets/img/svg-icon/facebook-angry.svg";

const ReactionsCount = () => {
  return (
    <ReactionsCountWrapper>
      <ul>
        <li className="like-count-icon">
          <img src={like} />
        </li>

        <li className="love-count-icon">
          <img src={love} />
        </li>

        <li className="wow-count-icon">
          <img src={wow} />
        </li>

        <li className="haha-count-icon">
          <img src={haha} />
        </li>

        <li className="sad-count-icon">
          <img src={sad} />
        </li>

        <li className="angry-count-icon">
          <img src={angry} />
        </li>
      </ul>
      <div id="reactionCount">6</div>
    </ReactionsCountWrapper>
  );
};

export default ReactionsCount;
