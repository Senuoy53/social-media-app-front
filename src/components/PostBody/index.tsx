import PostBodyWrapper from "./PostBodyWrapper";
import { CardContent, CardMedia, Typography } from "@mui/material";

const PostBody = ({ desc, img }: PostBodyProps) => {
  return (
    <PostBodyWrapper>
      <CardContent>
        <Typography variant="body2" color="text.secondary" id="description">
          {desc}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={img}
        alt="Paella dish"
        className="CardMedia"
      />
    </PostBodyWrapper>
  );
};

export default PostBody;
