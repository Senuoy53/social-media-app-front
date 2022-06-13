import { css } from "styled-components";

export const desktop = (props: any) => {
  return css`
    @media screen and (min-width: 1023px) {
      ${props}
    }
  `;
};

export const tablette1050 = (props: any) => {
  return css`
    @media screen and (min-width: 860px) and (max-width: 1050px) {
      ${props}
    }
  `;
};

export const tablette860 = (props: any) => {
  return css`
    @media screen and (min-width: 768px) and (max-width: 860px) {
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

export const mobile400 = (props: any) => {
  return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
};
