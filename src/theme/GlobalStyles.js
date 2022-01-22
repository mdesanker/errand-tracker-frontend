import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  html {
    font-family: helvetica, arial, sans-serif;
    font-size: 18px;
  }
  body {
    width: 100%;
    /* For footer positioning */
    position: relative;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
