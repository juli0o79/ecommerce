import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Averta Std';
    src: url('/fonts/AvertaStd/AvertaStd-Regular.woff2') format('woff2'),
         url('/fonts/AvertaStd/AvertaStd-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Averta Std';
    src: url('/fonts/AvertaStd/AvertaStd-Bold.woff2') format('woff2'),
         url('/fonts/AvertaStd/AvertaStd-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    html,
    body {
      max-width: 100vw;
      overflow-x: hidden;
    }

`;
