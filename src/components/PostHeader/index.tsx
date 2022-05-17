import PostHeaderWrapper from "./PostHeaderWrapper";
import { MoreVert } from "@mui/icons-material";
import { Avatar, CardHeader, IconButton } from "@mui/material";

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
        subheader={subheader}
      />
    </PostHeaderWrapper>
  );
};

export default PostHeader;
