import styled from "styled-components";

const ReactionsCountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-size: 18px;

  ul {
    padding: 0px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    list-style: none;
  }

  ul li {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-left: -6px;
    background-color: #3335;
  }

  ul li img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export default ReactionsCountWrapper;
