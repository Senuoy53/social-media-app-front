import { css } from "styled-components";

export const desktop = (props: any) => {
  return css`
    @media screen and (min-width: 1023px) {
      ${props}
    }
  `;
};

export const tablette = (props: any) => {
  return css`
    @media screen and (min-width: 768px) {
      ${props}
    }
  `;
};

export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 767px) {
      ${props}
    }
  `;
};

export const mobile600 = (props: any) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};

export const mobile350 = (props: any) => {
  return css`
    @media only screen and (max-width: 350px) {
      ${props}
    }
  `;
};
