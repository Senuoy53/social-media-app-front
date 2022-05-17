import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const ModalWrapper = styled.div`
  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 1000;
  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    border-radius: 10px;
    width: 600px;
    ${mobile({
      width: "100%",
    })}
    z-index: 1000;
  }

  .top-bar {
    background: ${({ theme }) => theme.colors.BlueBg};
    border-radius: 10px 10px 0 0;
    color: ${({ theme }) => theme.colors.White};
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
      flexDirection: "column",
    })}
  }

  .top-bar h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3em;
  }

  .selects {
    display: flex;
    justify-content: space-around;
    gap: 12px;
    width: 300px;
    margin: 0 50px 5px 0;
    ${mobile({
      flexDirection: "column",
      width: "60%",
      marginRight: "0",
    })}
  }

  .top-bar-buttom {
    height: 5px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.Blue1};
  }

  .avatar {
    ${mobile({
      display: "none",
    })}
  }

  .custom-text-area {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    ${mobile({
      flexDirection: "column",
      width: "100%",
    })}
  }

  .custom-text-area textarea {
    font-size: 1.5em;
    resize: vertical;
    width: 450px;
    height: 50px;
    border: none;
    background: #f1f1f1;
    ${mobile({
      width: "90%",
      height: "100px",
    })}
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-box {
    display: flex;
    justify-content: center;
  }

  .image-close-button {
    position: absolute;
    right: 5%;
  }

  .post-close-button {
    position: absolute;
    right: 5%;
  }

  .image-preview {
    width: 100px;
  }
  .image-upload > input {
    display: none;
  }

  .image-box img {
    width: 95%;
    height: auto;
    max-height: 350px;
    border-radius: 10px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 10px;
  }

  .button-right-side {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    margin: 10px;
  }
`;

export default ModalWrapper;
