import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const PostBodyWrapper = styled.div`
  #description {
    color: ${({ theme }) => theme.colors.Black};
    font-size: 20px;

    ${mobile({
      fontSize: "18px",
    })}
  }

  .CardMedia {
    padding: 16px;
    max-height: 400px;
    /* background-size: contain; */
    /* object-fit: none; */
    object-fit: fill;
  }
`;

export default PostBodyWrapper;
