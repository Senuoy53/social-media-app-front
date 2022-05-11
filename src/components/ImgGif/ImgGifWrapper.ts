import styled from "styled-components";

const ImgGifWrapper = styled.li`
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: 0.3s;
    transform: scale(1.5);
  }
  img:hover {
    transform: scale(2);
  }
`;

export default ImgGifWrapper;
