import styled from "styled-components";
import {
  mobile,
  tablette,
  tablette1050,
  desktop,
} from "../../styles/responsive";
import { theme } from "../../styles/global-styles";

const RightBarWrapper = styled.section<any>`
  flex: 20%;
  position: sticky;
  top: 80px;
  max-height: 466px;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 4px;
  z-index: 1000;

  @media only screen and (max-width: 767px) {
    display: ${({ ocButton }) => (ocButton ? "block" : "none")};
    position: absolute;
    top: 70px;
    right: 40px;
    min-width: 250px;
  }

  .onlineColleaguesContainerBox {
    margin: 16px 0px 16px 16px;
  }

  .ocTitle {
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

  .ocList {
    padding: 0;
    margin: 0;
    list-style: none;

    max-height: 400px;
    overflow-y: auto;
  }

  .onlineColleagues {
    margin-top: 10px;
  }
`;

export default RightBarWrapper;
