import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    font-size: 62.5%; //to rem be 10px instead of 16px;
  }
  html, body{
    height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  *{
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
`;

