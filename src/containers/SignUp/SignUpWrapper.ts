import styled from "styled-components";
import { mobile, tablette } from "../../styles/responsive";

const SignUpWrapper = styled.form`
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
    padding: 3px 30px;
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
`;

export default SignUpWrapper;
