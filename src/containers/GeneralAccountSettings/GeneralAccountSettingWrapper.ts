import styled from "styled-components";
import {
  mobile,
  mobile360,
  mobile400,
  tablette860,
} from "../../styles/responsive";
import { theme } from "../../styles/global-styles";

const GeneralAccountSettingWrapper = styled.section`
  margin: 64px 20px 0px 20px;
  flex: 100%;

  ${mobile({
    margin: "64px 5px",
  })}

  .generalAccountContainer {
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors.White};
    padding: 10px;

    .containerTitle {
      text-align: center;
    }

    .btn-2 {
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.BlueBg};
      color: ${({ theme }) => theme.colors.White};
      ${tablette860({
        fontSize: "12px",
      })}
    }

    .button-container {
      align-self: flex-end;
      margin-top: 10px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
    }

    .alert {
      padding: 2px 3px;
      margin-top: -20px;
      margin-bottom: 3px;
    }

    .updateBtn {
      align-self: flex-end;
    }

    .generalAccountBox {
      display: flex;

      margin-top: 40px;

      ${mobile({
        flexWrap: "wrap",
      })}

      .gaTitle {
        margin-bottom: 10px;
        font-weight: 400;
      }

      .gaLeft {
        flex: 39%;
        display: flex;
        flex-direction: column;
        align-items: center;

        ${mobile({
          flex: "100%",
        })}

        .img-holder {
          /* width: 150px; */
          height: 150px;
          border: 3px solid ${({ theme }) => theme.colors.BlueBg};
          border-radius: 3px;
          overflow: hidden;
          border-radius: 20px;
          margin-bottom: 10px;

          .img-profil {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
        }

        #input-upload {
          display: none;
        }

        .img-label {
          margin-top: 10px;
          display: flex;

          ${mobile360({
            flexDirection: "column",
          })}

          .img-upload {
            padding: 5px 15px;
            text-transform: capitalize;
            border-radius: 5px;
            background-color: ${({ theme }) => theme.colors.BlueBg};
            color: ${({ theme }) => theme.colors.White};
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.75;
            letter-spacing: 0.02857em;
            box-sizing: border-box;
            outline: 0;
            border: 0;
            margin: 0;
            cursor: pointer;
            margin-right: 5px;

            &:hover {
              background-color: ${({ theme }) => theme.colors.HoverBlueBg};
            }

            ${tablette860({
              fontSize: "12px",
              padding: "5px 12px",
              marginRight: "3px",
            })}

            ${mobile360({
              marginBottom: "5px",
              marginRight: "0px",
              padding: "3px 30px",
            })}
          }
        }
      }

      .middleLine {
        flex: 2%;
        height: 430px;
        /* max-height: 100%; */
        border-left: 1px solid ${({ theme }) => theme.colors.BlueBg};
        margin-left: 30px;

        ${mobile({
          flex: "100%",
          height: "0px",
          width: "100px",
          borderTop: `1px solid ${theme.colors.BlueBg}`,
          margin: "30px",
        })}
      }

      .gaRight {
        flex: 59%;
        display: flex;
        flex-direction: column;
        align-items: center;

        ${mobile({
          flex: "100%",
        })}

        .gaForm {
          display: flex;
          flex-direction: column;
        }

        .input-container {
          display: flex;
          flex-direction: column;

          .input-box {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            .required {
              color: red;
            }

            .labelText {
              flex: 1;
              align-self: flex-start;

              ${mobile({
                fontSize: "14px",
              })}

              ${mobile400({
                fontSize: "12px",
              })}
            }

            .textField-box {
              margin-left: 20px;

              .box {
                min-width: 275px;
              }

              .box2 {
                width: 210px;
              }
            }
          }
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
  }
`;

export default GeneralAccountSettingWrapper;
