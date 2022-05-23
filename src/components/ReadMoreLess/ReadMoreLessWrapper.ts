import styled from "styled-components";
const ReadMoreLessWrapper = styled.span`
  #ReadBtn {
    margin-left: 2px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: lighter;
    font-size: inherit;
    color: ${({ theme }) => theme.colors.GrayColor};
    outline: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ReadMoreLessWrapper;
