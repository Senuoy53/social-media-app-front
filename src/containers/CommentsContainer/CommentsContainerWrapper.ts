import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const CommentsContainerWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.GrayColor};

  ${mobile({
    fontSize: "14px",
  })}

  .com-rightSide {
    /* display: flex;
    flex-direction: column;
     */
    margin: 0px 3px 0px 5px;

    #commentBody {
      margin-top: 5px;
      color: ${({ theme }) => theme.colors.Black};
    }
  }

  #comBottomContainer {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 5px;

    .CommentButton {
      font-weight: lighter;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .cmReactionCount {
    ${mobile({
      fontSize: "15px",
    })}

    ul li {
      ${mobile({
        width: "15px",
        height: "15px",
      })}
    }
  }
`;

export default CommentsContainerWrapper;
