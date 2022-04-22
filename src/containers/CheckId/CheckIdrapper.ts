import styled from "styled-components";
import { mobile, tablette } from "../../styles/responsive";

const CheckIdWrapper = styled.div`
  ${tablette({
    display: "flex",
    alignItems: "center",
    width: "80%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  })};
  .left {
    flex: 1;
    ${mobile({
      display: "none",
    })}
    .bigimagebg {
      width: 100%;
      height: 90vh;
    }
  }
  .right {
    flex: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-height: 50vh; */
    .smallimagebg {
      display: none;
      ${mobile({
        display: "block",
        width: "15wh",
        height: "15vh",
        marginBottom: "40px",
      })}
    }
    /* img {
      width: 100%;
    } */
    .logo {
      width: 40%;
      max-width: 210px;
      margin-bottom: 10px;
      ${mobile({
        width: "60%",
      })}
    }
    .title {
      font-weight: 500;
      margin-bottom: 30px;
    }
    .subtitle {
      color: ${({ theme }) => theme.colors.LightBlueBg};
      margin-bottom: 30px;
      ${mobile({
        fontSize: "22px",
      })}
    }
    form {
      width: 350px;
      ${mobile({
        width: "250px",
      })}
      .input-box {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
      }
      .input {
        width: 100%;
      }
      .input-container {
        margin-bottom: 20px;
      }
      .errors {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.ErrorColor};
      }
      .btn {
        margin-bottom: 20px;
        /* padding: 3px 30px; */
        text-transform: capitalize;
        ${mobile({
          width: "100%",
          padding: "10px 30px",
        })}
      }
      .messageInfo {
        color: ${({ theme }) => theme.colors.LightBlueBg};
        text-align: center;
      }
      a {
        color: ${({ theme }) => theme.colors.LightBlueBg};
      }
    }
  }
`;

export default CheckIdWrapper;
