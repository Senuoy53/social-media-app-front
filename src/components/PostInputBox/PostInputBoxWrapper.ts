import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const PostInputBoxWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 16px 10px;

  input {
    width: 100%;
    height: 30px;
    margin-right: 10px;
    border: none;
    padding: 10px;
    outline-color: ${({ theme }) => theme.colors.GrayColor};
  }

  .btn-2 {
    ${mobile({
      padding: "2px 20px",
      fontSize: "12px",
    })}
  }
`;

export default PostInputBoxWrapper;
