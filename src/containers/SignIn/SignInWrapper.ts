import styled from "styled-components";

const SignInWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: red; */

  .left {
    flex: 1;

    img {
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
    min-height: 50vh;

    .logo {
      width: 40%;
      margin-bottom: 10px;
    }

    .title {
      font-weight: 500;
      margin-bottom: 30px;
    }

    .subtitle {
      color: ${({ theme }) => theme.colors.LightBlueBg};
      margin-bottom: 30px;
    }

    form {
      width: 350px;
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

export default SignInWrapper;
