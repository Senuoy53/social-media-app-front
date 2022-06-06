import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const CommentHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    fontSize: "1em",
  })}

  #CommentName {
    margin-right: 3px;
    color: ${({ theme }) => theme.colors.Black};
    font-weight: bold;
    font-size: 1em;
  }

  #CommentDate {
    color: ${({ theme }) => theme.colors.GrayColor};
  }
`;

export default CommentHeaderWrapper;
