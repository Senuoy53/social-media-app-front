import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const HomeWrapper = styled.div`
  min-height: 100vh;
  background-color: #f3f3f3;

  .main {
    display: flex;
    padding: 0px 3%;
    margin-top: 15px;

    ${mobile({
      // padding: "0px 1%",
    })}
  }
`;

export default HomeWrapper;
