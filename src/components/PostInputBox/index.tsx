import PostInputBoxWrapper from "./PostInputBoxWrapper";
import { ButtonField } from "../../utils/constants";
import ButtonCustom from "../ButtonCustom";
import { IconButton, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { CommentInputFields } from "./constants";

const PostInputBox = ({handleClickPostNewComment}:any) => {
  const [values, setValues] = useState({
    isAnonym: false,
    commentInput: "",
  });

  const { isAnonym } = values;

  // handleAnonymClick
  const handleAnonymClick = () => {
    setValues({
      ...values,
      isAnonym: !isAnonym,
    });
  };

  // Handle change function
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,

      [name]: value,
    });
  };

  const handleClick = () => {
    handleClickPostNewComment(values)
    setValues({
      isAnonym: false,
      commentInput: "",
    })
  }

  return (
    <PostInputBoxWrapper>
      <Tooltip title="Comment as annonymous will hide your avatar and username, other users can still see, comment, react to the post without">
        <IconButton id="comAnonymous" onClick={handleAnonymClick}>
          {isAnonym ? (
            <FontAwesomeIcon icon={faUserSecret} color="black" />
          ) : (
            <FontAwesomeIcon icon={faUserSecret} color="grey" />
          )}
        </IconButton>
      </Tooltip>
      {/* input  */}
      <input
        type="text"
        {...CommentInputFields}
        value={values.commentInput}
        onChange={handleChange}
      />
      <ButtonCustom
        className={`btn-2 ${values.commentInput ? "active" : "inactive"}`}
        onClick={()=>handleClick()}
      >
        {ButtonField.POST}
      </ButtonCustom>
    </PostInputBoxWrapper>
  );
};

export default PostInputBox;
