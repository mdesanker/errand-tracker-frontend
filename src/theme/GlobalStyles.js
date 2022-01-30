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

  main {
    padding-top: ${({ theme }) => theme.heights.header};
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
  }

  h1 {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export default GlobalStyles;
