import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const PostContainerWrapper = styled.div`
  margin: 20px 0px;

  ${mobile({
    margin: "20px 0px",
  })};
`;

export default PostContainerWrapper;
