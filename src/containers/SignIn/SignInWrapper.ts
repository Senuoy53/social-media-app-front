import styled from "styled-components";
import { desktop, tablette, mobile } from "../../styles/responsive";

const SignInWrapper = styled.form`
  width: 350px;

  ${mobile({
    width: "250px",
  })}

  .noteMessage {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 30px;

    #red {
      color: red;
    }
  }

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
    padding: 3px 30px;
    text-transform: capitalize;

    ${mobile({
      width: "100%",
      padding: "10px 30px",
    })}
  }

  /* .messageInfo {
    color: ${({ theme }) => theme.colors.LightBlueBg};
    text-align: center;

    ${mobile({
    fontSize: "15px",
  })}
  }

  a {
    color: ${({ theme }) => theme.colors.LightBlueBg};
  } */
`;

export default SignInWrapper;
