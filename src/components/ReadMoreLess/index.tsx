import { useState } from "react";
import ReadMoreLessWrapper from "./ReadMoreLessWrapper";
import { ReadMoreLessTexts } from "./constants";

const ReadMoreLess = ({ children, limit }: ReadMoreLessProps) => {
  const [isReadMoreShow, setReadMoreShown] = useState(false);

  const textLimit = children?.substr(0, limit);

  //   handleClick
  const handleClick = () => {
    setReadMoreShown(!isReadMoreShow);
  };
  return (
    <ReadMoreLessWrapper>
      {isReadMoreShow ? children : textLimit}
      {textLimit && textLimit?.length >= limit && (
        <button id="ReadBtn" onClick={handleClick}>
          {isReadMoreShow
            ? ReadMoreLessTexts.READ_LESS
            : ReadMoreLessTexts.READ_MORE}
        </button>
      )}
    </ReadMoreLessWrapper>
  );
};

export default ReadMoreLess;
