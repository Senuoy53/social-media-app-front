import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const FeedContainerWrapper = styled.section`
  margin: 64px 40px 0;
  flex: 60%;
  ${mobile({
    margin: "64px 0 0",
  })}
`;

export default FeedContainerWrapper;
