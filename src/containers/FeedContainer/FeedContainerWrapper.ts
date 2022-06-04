import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const FeedContainerWrapper = styled.section`
  margin: 64px 40px 0;
  flex: 60%;

  ${mobile({
    margin: "64px 0 0",
  })}

  .postsContainer {
    text-align: center;

    .errorMessage {
      margin-top: 50px;
      color: #d8000c;
      background-color: #ffbaba;
    }

    .errorMessage:before {
      font-family: FontAwesome;
      content: "\f057";
      font-size: 24px;
      color: #d8000c;
    }

    .loadingPosts {
      margin-top: 50px;
      align-self: center;
    }

    .loadingMorePosts {
      /* margin-top: 20px; */
      align-self: center;
    }
  }
`;

export default FeedContainerWrapper;
