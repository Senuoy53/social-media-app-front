import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const PostContainerWrapper = styled.div`
  margin: 20px 0px;
  max-width: 1000px;
  text-align: initial;

  ${mobile({
    margin: "20px 0px",
  })};

  #CommentsContainer {
    margin: 20px 16px 20px;
    height: 200px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0.7rem;
    }

    ::-webkit-scrollbar-track {
      background-color: #f3f3f3;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c4c4c4;
      border-radius: 50px;
    }
  }
`;

export default PostContainerWrapper;
