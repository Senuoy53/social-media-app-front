import { CenterFocusStrong } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../styles/responsive";

const HomeWrapper = styled.div<any>`
  min-height: 100vh;
  background-color: #f3f3f3;

  .main {
    margin: 0 auto;
    display: flex;
    padding: 0px 3%;
    margin-top: 15px;
    max-width: 1440px;

    ${mobile({
      // marginTop: "70px",
    })}
  }

  .onlineColleaguesButton {
    /* position: sticky; */
    position: absolute;
    top: 70px;
    /* left: 800px; */
    right: 0;
    width: 55px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.BlueBg};
    z-index: 1000;
    border-top-left-radius: 12px;
    cursor: pointer;

    :hover .blueBar {
      background-color: ${({ theme }) => theme.colors.White};
    }

    display: none;
    ${mobile({
      display: "flex",
      alignItems: "center",
    })}

    .blueBar {
      top: 100px;
      width: 10px;
      height: 50px;
      border-top-left-radius: 12px;
      background-color: ${({ ocButton, theme }) =>
        ocButton ? theme.colors.White : theme.colors.LightBlueBg};
    }

    .ocIcon {
      color: ${({ theme }) => theme.colors.White};
      margin: 0 auto;
    }

    .icon {
      font-size: 25px;
    }
  }
`;

export default HomeWrapper;
