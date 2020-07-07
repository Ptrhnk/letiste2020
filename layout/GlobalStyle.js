import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    letter-spacing: .8px;
    box-sizing: border-box;
  }
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  .ReactModal__Overlay--after-open{
      opacity: 1;
  }
  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
`;
