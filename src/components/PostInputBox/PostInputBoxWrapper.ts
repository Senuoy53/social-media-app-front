import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const PostInputBoxWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 16px 10px;

  #comAnonymous {
    font-size: 20px;
    margin-right: 5px;
    ${mobile({
      fontSize: "18px",
    })}
  }

  input {
    width: 100%;
    height: 30px;
    margin-right: 10px;
    border: none;
    padding: 10px;
    outline-color: ${({ theme }) => theme.colors.GrayColor};
  }

  .btn-2 {
    &.active {
      opacity: 1;
      /* disable the cursor pointer */
      pointer-events: auto;
    }

    &.inactive {
      opacity: 0.6;
      /* disable the cursor pointer */
      pointer-events: none;
    }

    ${mobile({
      padding: "2px 20px",
      fontSize: "12px",
    })}
  }
`;

export default PostInputBoxWrapper;
