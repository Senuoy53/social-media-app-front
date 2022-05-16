import styled from "styled-components";
import { mobile600 } from "../../styles/responsive";

const PostShowInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 16px 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.GrayColor};

  ${mobile600({
    fontSize: "16px",
  })}

  .right {
    display: flex;
    align-items: center;
    gap: 10px;

    #postReactionCount {
      font-size: 18px;
      margin-left: -5px;

      ${mobile600({
        fontSize: "16px",
      })}
    }
  }
`;

export default PostShowInfoWrapper;
