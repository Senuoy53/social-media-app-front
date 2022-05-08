import { Link } from "react-router-dom";
import MessageInfoWrapper from "./MessageInfoWrapper";
import { MessageInfoProps } from "./types";

const MessageInfoComp = ({ part1, part2, to }: MessageInfoProps) => {
  return (
    <MessageInfoWrapper>
      {part1}
      <Link to={to}>{part2}</Link>
    </MessageInfoWrapper>
  );
};

export default MessageInfoComp;
