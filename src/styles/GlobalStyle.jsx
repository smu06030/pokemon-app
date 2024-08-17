import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  #root{
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
  
  html, body{
    background-color: rgb(255, 220, 154);
  }
`;

export default GlobalStyle;
