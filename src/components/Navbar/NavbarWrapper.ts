import styled from "styled-components";
import { mobile, mobile600, mobile400 } from "../../styles/responsive";

const NavbarWrapper = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 3%;

    ${mobile({
      padding: "0px 1%",
    })};
  }

  .navMenu {
    display: flex;

    a {
      color: ${({ theme }) => theme.colors.White};
    }
    .active::after {
      content: "";
      width: 100%;
      height: 4px;
      position: absolute;
      bottom: -10px;
      left: 0;
      background-color: ${({ theme }) => theme.colors.White};
    }

    .navBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      margin-left: 40px;
      position: relative;

      ${mobile400({
        marginLeft: "10px",
      })}

      &:hover::after {
        content: "";
        width: 100%;
        height: 4px;
        position: absolute;
        bottom: -10px;
        left: 0;
        background-color: ${({ theme }) => theme.colors.White};
      }

      .navIcon {
        font-size: 35px;
        /* color: ${({ theme }) => theme.colors.White};
        color: transparent;
        background: ${({ theme }) => theme.colors.White};
        background-clip: text;
        -webkit-background-clip: text; */

        ${mobile600({
          fontSize: "25px",
        })}
      }

      .navText {
        margin-top: -3px;
        font-size: 10px;
        display: block;

        ${mobile({
          display: "none",
        })};
      }
    }
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 150px;
    ${mobile({
      width: "100px",
    })}

    .logo {
      width: 80%;
    }

    .logoTitle {
      font-size: 12px;

      ${mobile({
        fontSize: "8px",
      })}
    }
  }
`;

export default NavbarWrapper;
