import PostContainerWrapper from "./PostContainerWrapper";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import { Card, CardActions, Checkbox, IconButton } from "@mui/material";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import PostShowInfo from "../../containers/PostShowInfo";

const PostContainer = ({
  avatar,
  title,
  subheader,
  desc,
  img,
}: PostContainerProps) => {
  return (
    <PostContainerWrapper>
      <Card sx={{ margin: 0 }}>
        {/* Post Header */}
        <PostHeader avatar={avatar} title={title} subheader={subheader} />
        {/* Post Body */}
        <PostBody desc={desc} img={img} />
        {/* Show post info */}
        <PostShowInfo />
      </Card>
    </PostContainerWrapper>
  );
};

export default PostContainer;
