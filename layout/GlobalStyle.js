import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    box-sizing: border-box;
    font-size: 62.5%;
    background-color: black;
  }
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      /* box-sizing: inherit; */
      box-sizing: border-box;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  .ReactModal__Overlay--after-open {
      opacity: 1;
  }
  .ReactModal__Overlay--before-close {
      opacity: 0;
  }
`;
