import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const CommentsContainerWrapper = styled.div`
  display: flex;
  margin: 20px 16px 20px;

  .com-rightSide {
    /* display: flex;
    flex-direction: column;
     */
    margin: 0px 3px 0px 5px;

    #commentBody {
      margin-top: 5px;
    }

    #comBottomContainer {
      display: flex;
      gap: 5px;
      margin-top: 5px;

      .CommentButton {
        font-size: 14px;
        font-weight: lighter;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default CommentsContainerWrapper;
