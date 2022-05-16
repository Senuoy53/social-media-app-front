import PostInputBoxWrapper from "./PostInputBoxWrapper";
import { ButtonField } from "../../utils/constants";
import ButtonCustom from "../ButtonCustom";

const PostInputBox = () => {
  // handleClick
  const handleClick = () => {};

  return (
    <PostInputBoxWrapper>
      {/* input  */}
      <input type="text" placeholder="Add a comment..." />
      <ButtonCustom className="btn-2" onClick={handleClick}>
        {ButtonField.POST}
      </ButtonCustom>
    </PostInputBoxWrapper>
  );
};

export default PostInputBox;
