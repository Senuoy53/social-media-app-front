import styled from "styled-components";

const ReactionButtonWrapper = styled.div`
  cursor: pointer;
  position: relative;

  &:hover .hover-like-img {
    display: block;
  }

  .solid {
    color: #2078f4;
  }

  .like-text {
    margin-left: 5px;
  }

  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3335;
  }

  .btn {
    display: flex;
    align-items: center;
  }

  .love-button {
    color: #f33e58;
  }

  .yellow-button {
    color: #f7b125;
  }

  .angry-button {
    color: #e9710f;
  }

  .hover-like-img {
    position: absolute;
    top: -50px;
    left: 0;
    width: 224px;
    padding: 5px;
    border-radius: 30px;
    border: 2px solid #ccc;
    background-color: #fff;
    transition: 0.3s;
    display: none;
  }
`;

export default ReactionButtonWrapper;
