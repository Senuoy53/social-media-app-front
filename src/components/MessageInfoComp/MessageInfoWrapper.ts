import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const MessageInfoWrapper = styled.p`
  color: ${({ theme }) => theme.colors.LightBlueBg};
  text-align: center;

  ${mobile({
    fontSize: "15px",
  })}

  a {
    color: ${({ theme }) => theme.colors.LightBlueBg};
    margin-left: 3px;
  }
`;

export default MessageInfoWrapper;
