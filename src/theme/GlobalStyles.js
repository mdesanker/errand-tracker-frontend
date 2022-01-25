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
    background-color: #f0f2f5;
    /* For footer positioning */
    position: relative;
    min-height: 100vh;
  }

  h1 {
    color: ${({ theme }) => theme.colors.medium};
  }
`;

export default GlobalStyles;
