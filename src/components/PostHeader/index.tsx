import PostHeaderWrapper from "./PostHeaderWrapper";
import { MoreVert } from "@mui/icons-material";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import Moment from "react-moment";

const PostHeader = ({ avatar, title, subheader }: PostHeaderProps) => {
  return (
    <PostHeaderWrapper>
      <CardHeader
        titleTypographyProps={{
          textTransform: "capitalize",
        }}
        avatar={<Avatar aria-label="recipe" src={avatar}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={<Moment format="MMM DD YYYY, LT">{subheader}</Moment>}
      />
    </PostHeaderWrapper>
  );
};

export default PostHeader;
