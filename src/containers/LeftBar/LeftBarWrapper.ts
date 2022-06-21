import styled from "styled-components";
import {
  mobile,
  tablette,
  tablette1050,
  desktop,
} from "../../styles/responsive";

const LeftBarWrapper = styled.section<any>`
  position: sticky;
  top: 80px;
  flex: 25%;
  max-height: 400px;
  z-index: 1001;

  @media only screen and (max-width: 767px) {
    position: initial;
    flex: 0%;
  }

  .eventsContainer {
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.White};
    border-radius: 4px;

    @media only screen and (max-width: 767px) {
      width: 95%;
      position: fixed;
      top: 70px;
      display: ${({ evBtnClicked }) => (evBtnClicked ? "block" : "none")};
    }

    .evTitle {
      margin-bottom: 15px;

      ${tablette({
        fontSize: "12px",
      })}

      ${tablette1050({
        fontSize: "14px",
      })}

    ${desktop({
        fontSize: "16px",
      })}
    }

    .evList {
      /* max-height: 430px; */
      /* overflow-y: auto; */
    }

    .eventsBox {
      display: flex;
      margin-top: 10px;
      align-items: center;

      border-radius: 5px;
      padding: 5px;
      box-shadow: 12px 2px 34px -12px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 12px 9px 34px -12px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 12px 9px 34px -12px rgba(0, 0, 0, 0.2);
      z-index: 1001;

      ${tablette({
        flexDirection: "column",
      })}

      ${desktop({
        flexDirection: "row",
      })}
    }

    .rightBox {
      flex: 30%;
      margin-right: 10px;

      ${tablette({ marginRight: "0px" })}

      ${desktop({
        marginRight: "10px",
      })}

      .evImg {
        width: 100%;
        height: 100%;
        border-radius: 10px;

        ${tablette({
          flex: "100%",
          width: "20vw",
          height: "60px",
        })}

        ${desktop({
          flex: "30%",
          width: "100%",
          height: "100%",
          marginRight: "10px",
        })}
      }
    }

    .leftBox {
      flex: 70%;

      ${tablette({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}

      ${desktop({
        display: "block",
        flexDirection: "row",
      })}
    

      /* ${tablette({
        flex: "100%",
      })}

      ${desktop({
        flex: "70%",
      })} */

      .eventDate {
        color: ${({ theme }) => theme.colors.LightBlueBg};
        font-weight: 400;
        margin-bottom: 5px;
      }

      .eventTitle {
        font-weight: 400;
      }

      .eventLocation {
        display: flex;
        align-items: center;
        font-size: 11px;
        margin-top: 5px;
        color: #7e7979;

        ${tablette({
          fontSize: "10px",
        })}

        ${desktop({
          fontSize: "12px",
        })}

        .icon {
          margin-right: 4px;
          font-size: 18px;

          ${tablette({
            fontSize: "16px",
          })}

          ${desktop({
            fontSize: "18px",
          })}
        }
      }
    }
  }
`;

export default LeftBarWrapper;
