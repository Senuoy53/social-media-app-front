import { Tooltip } from "@mui/material";
import ImgGifWrapper from "./ImgGifWrapper";

const ImgGif = ({ className, imgGif, id, onClick }: ImgGifProps) => {
  return (
    <ImgGifWrapper className={className} onClick={onClick}>
      <Tooltip
        title={id}
        placement="top"
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "common.black",
              textTransform: "capitalize",

              "& .MuiTooltip-arrow": {
                color: "common.black",
              },
            },
          },
        }}
      >
        <img src={imgGif} id={id} />
      </Tooltip>
    </ImgGifWrapper>
  );
};

export default ImgGif;
