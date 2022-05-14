import { Avatar } from "@mui/material";
import CommentHeaderWrapper from "./CommentHeaderWrapper";

const CommentHeader = () => {
  return (
    <CommentHeaderWrapper>
      <p id="CommentName">Younes Lamrani</p>
      <span id="CommentDate">5 minutes ago</span>
    </CommentHeaderWrapper>
  );
};

export default CommentHeader;
