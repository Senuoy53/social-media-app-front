import styled from "styled-components";
import {mobile} from "../../styles/responsive";

const PostWrapper = styled.div`
body.active-modal {
  overflow-y: hidden;
}

.btn-modal {
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
}

.post{
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default PostWrapper;
