import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const GeneralAccountPageWrapper = styled.div`
  min-height: 97.5vh;
  background-color: #f3f3f3;

  /* ${mobile({
    minHeight: "140.5vh",
  })} */

  @media only screen and (max-width: 767px) {
    min-height: calc(100vh + 15px);
  }

  .main {
    margin: 0 auto;
    display: flex;
    padding: 0px 3%;
    margin-top: 15px;
    max-width: 1440px;

    ${mobile({
      padding: "0px 1%",
    })}
  }
`;

export default GeneralAccountPageWrapper;
