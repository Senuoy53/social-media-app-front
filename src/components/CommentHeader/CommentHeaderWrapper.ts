import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const CommentHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    fontSize: "12px",
  })}

  #CommentName {
    margin-right: 3px;
    color: ${({ theme }) => theme.colors.Black};
    font-weight: bold;
  }

  #CommentDate {
    color: ${({ theme }) => theme.colors.GrayColor};
  }
`;

export default CommentHeaderWrapper;
