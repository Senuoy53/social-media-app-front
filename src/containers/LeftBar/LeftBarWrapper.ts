import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const LeftBarWrapper = styled.section`
  position: sticky;
  top: 80px;
  max-height: 100px;
  flex: 20%;
  background-color: white;
  /* display: "none", */
  ${mobile({
    display: "none",
  })};
`;

export default LeftBarWrapper;
