import styled from "styled-components";
import { mobile, tablette1050, tablette860 } from "../../styles/responsive";

const OnlineColleaguesWrapper = styled.li`
  .ocBadge {
    margin-right: 5px;
  }

  .avatarUser {
    ${mobile({
      width: "40px",
      height: "40px",
    })}
  }

  .ocUsername {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.01071em;

    ${tablette1050({
      fontSize: "12px",
    })}

    ${tablette860({
      fontSize: "10px",
    })}

    ${mobile({
      fontSize: "14px",
    })}
  }
`;

export default OnlineColleaguesWrapper;
