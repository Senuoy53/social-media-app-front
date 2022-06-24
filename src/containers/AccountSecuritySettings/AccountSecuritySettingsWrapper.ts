import styled from "styled-components";
import {
  mobile,
  mobile360,
  mobile400,
  tablette,
  tablette860,
} from "../../styles/responsive";
import { theme } from "../../styles/global-styles";

const AccountSecuritySettingsWrapper = styled.section`
  margin: 64px 20px 0px 20px;
  flex: 100%;

  ${mobile({
    margin: "64px 5px",
  })}

  .accountSecurityContainer {
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors.White};
    padding: 10px;
    min-height: 84.5vh;

    max-width: 1440px;
    margin: 0 auto;

    .containerTitle {
      text-align: center;
      font-size: 2rem;
      font-weight: 400;

      ${tablette860({
        fontSize: "1.8rem",
      })}

      ${mobile({
        fontSize: "1.5rem",
      })}
    }

    .btn-2 {
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.BlueBg};
      color: ${({ theme }) => theme.colors.White};

      ${mobile({
        fontSize: "12px",
      })};
    }

    .button-container {
      align-self: flex-end;
      margin-top: 10px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
    }

    .alert {
      margin-bottom: 5px;
      width: 100%;

      ${mobile400({
        fontSize: "0.7rem",
      })}
    }

    .updateBtn {
      align-self: flex-end;
    }

    .accountSecurityBox {
      display: flex;
      justify-content: center;
      margin-top: 40px;

      .asBox {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .asTitle {
        margin-bottom: 10px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.BlueBg};
        text-align: center;
      }

      .asForm {
        margin-top: 50px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      .input-container {
        /* width: 50%; */
        display: flex;
        flex-direction: column;

        /* mobile */
        width: 100%;

        .input-box {
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          ${mobile({
            flexDirection: "column",
          })}

          .labelText {
            flex: 1;
            align-self: flex-start;

            ${mobile({
              fontSize: "14px",
              marginBottom: "15px",
            })}

            ${mobile400({
              fontSize: "12px",
            })}
          }

          .textField-box {
            /* margin-left: 20px; */
            flex: 1;

            /* Mobile */
            width: 100%;

            .input {
              width: 100%;
            }

            .MuiInputLabel-root {
              ${mobile({
                fontSize: "14px",
                marginBottom: "15px",
              })}

              ${mobile400({
                fontSize: "12px",
              })}
            }

            .box {
              min-width: 275px;
            }

            .box2 {
              width: 210px;
            }
          }
        }
      }

      .messageInfoComp {
        ${mobile({
          fontSize: "14px",
        })}
        ${mobile400({
          fontSize: "12px",
        })}
      }

      .loading {
        margin-right: 20px;
        height: 20px;
        width: 20px;
        border: 3px solid ${({ theme }) => theme.colors.BlueBg};
        border-radius: 50%;
        border-right: 3px solid transparent;
        animation: spin 2s linear infinite;
        -webkit-animation: spin 2s linear infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export default AccountSecuritySettingsWrapper;
