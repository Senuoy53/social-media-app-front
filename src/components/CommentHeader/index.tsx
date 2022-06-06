import { Avatar } from "@mui/material";
import CommentHeaderWrapper from "./CommentHeaderWrapper";
import Moment from "react-moment";

const CommentHeader = ({fname, lname, date}:any) => {

  const name =  fname.charAt(0).toUpperCase() + fname.slice(1) + " " + lname.charAt(0).toUpperCase() + lname.slice(1)
  const dateFormated = new Date(date)

  return (
    <CommentHeaderWrapper>
      <p id="CommentName">{name}</p>
      <span id="CommentDate"><Moment format="MMM DD YYYY, LT">{date}</Moment></span>
    </CommentHeaderWrapper>
  );
};

export default CommentHeader;
