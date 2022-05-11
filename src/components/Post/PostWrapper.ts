import styled from "styled-components";
import {mobile} from "../../styles/responsive";

const PostWrapper = styled.form`
body.active-modal {
  overflow-y: hidden;
}

.btn-modal {
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
}
`;

export default PostWrapper;
