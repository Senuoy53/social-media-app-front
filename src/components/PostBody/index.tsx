import PostBodyWrapper from "./PostBodyWrapper";
import { CardContent, CardMedia, Typography } from "@mui/material";
import ReadMoreLess from "../ReadMoreLess";

const PostBody = ({ desc, img }: PostBodyProps) => {
  return (
    <PostBodyWrapper>
      <CardContent>
        <Typography variant="body2" color="text.secondary" id="description">
          <ReadMoreLess limit={150}>{desc}</ReadMoreLess>
        </Typography>
      </CardContent>
      {img && (
        <CardMedia
          component="img"
          image={img}
          alt="Profile Picture"
          className="CardMedia"
        />
      )}
    </PostBodyWrapper>
  );
};

export default PostBody;
