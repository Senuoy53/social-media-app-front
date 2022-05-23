import styled from "styled-components";

const LoadingComponentWrapper = styled.div<LoadingComponentsProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  /* width: 100px;
  height: 100px; */
  display: inline-block;
  overflow: hidden;
  background: transparent;

  @keyframes ldio-6et9i5bxmr3 {
    0% {
      transform: scale(1.1500000000000001);
    }
    100% {
      transform: scale(1);
    }
  }
  .ldio-6et9i5bxmr3 div {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 6.666666666666668px;
    left: 6.666666666666668px;
    background: #bd4129;
    animation: ldio-6et9i5bxmr3 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation-delay: -0.3s;
  }
  .ldio-6et9i5bxmr3 div:nth-child(2) {
    top: 6.666666666666668px;
    left: 53.33333333333333px;
    background: #859bcd;
    animation-delay: -0.2s;
  }
  .ldio-6et9i5bxmr3 div:nth-child(3) {
    top: 53.33333333333333px;
    left: 6.666666666666668px;
    background: #6f7494;
    animation-delay: 0s;
  }
  .ldio-6et9i5bxmr3 div:nth-child(4) {
    top: 53.33333333333333px;
    left: 53.33333333333333px;
    background: #a4b6da;
    animation-delay: -0.1s;
  }

  .ldio-6et9i5bxmr3 {
    width: 100%;
    height: 100%;
    position: relative;
    /* transform: translateZ(0) scale(${({ scale }) => scale}) scale(1); */
    transform: translateZ(0) scale(${({ scale }) => scale});
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }

  .ldio-6et9i5bxmr3 div {
    box-sizing: content-box;
  }
`;

export default LoadingComponentWrapper;
