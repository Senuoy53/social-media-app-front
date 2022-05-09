import styled from "styled-components";
import { mobile } from "../../styles/responsive";
import { theme } from "../../styles/global-styles";

const RightBarWrapper = styled.section`
  position: sticky;
  top: 80px;
  max-height: 100px;
  flex: 20%;
  background-color: ${({ theme }) => theme.colors.White};
  ${mobile({
    display: "none",
  })}
`;

export default RightBarWrapper;
