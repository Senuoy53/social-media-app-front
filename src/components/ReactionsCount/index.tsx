import ReactionsCountWrapper from "./ReactionsCountWrapper";
import like from "../../assets/img/svg-icon/facebook-reaction-like.svg";
import love from "../../assets/img/svg-icon/facebook-love.svg";
import wow from "../../assets/img/svg-icon/facebook-wow.svg";
import haha from "../../assets/img/svg-icon/facebook-haha.svg";
import sad from "../../assets/img/svg-icon/facebook-reaction-sad.svg";
import angry from "../../assets/img/svg-icon/facebook-angry.svg";
import { useEffect, useState } from "react";

const ReactionsCount = ({ reactions }: ReactionCountProps) => {
  const [filterReactions, setFilterReactions] = useState<any[]>([]);

  useEffect(() => {
    const data: any[] = [];

    // reactions &&
    //   reactions.map((item: any) => {
    //     data.push(item.reaction);
    //   });

    const uniqueData: any[] = [];
    reactions &&
      reactions.forEach((reaction: any) => {
        if (!uniqueData.includes(reaction)) {
          uniqueData.push(reaction);
        }
      });

    setFilterReactions(uniqueData);
  }, [reactions]);

  // console.log("filterReactions", filterReactions);
  return (
    <ReactionsCountWrapper>
      <ul>
        {filterReactions &&
          filterReactions.map((reaction: string, index: number) => {
            if (reaction === "like") {
              return (
                <li className="like-count-icon">
                  <img src={like} />
                </li>
              );
            }
            if (reaction === "love") {
              return (
                <li className="love-count-icon">
                  <img src={love} />
                </li>
              );
            }
            if (reaction === "wow") {
              return (
                <li className="wow-count-icon">
                  <img src={wow} />
                </li>
              );
            }
            if (reaction === "haha") {
              return (
                <li className="haha-count-icon">
                  <img src={haha} />
                </li>
              );
            }
            if (reaction === "sad") {
              return (
                <li className="sad-count-icon">
                  <img src={sad} />
                </li>
              );
            }
            if (reaction === "angry") {
              return (
                <li className="angry-count-icon">
                  <img src={angry} />
                </li>
              );
            }
          })}
      </ul>
    </ReactionsCountWrapper>
  );
};

export default ReactionsCount;
