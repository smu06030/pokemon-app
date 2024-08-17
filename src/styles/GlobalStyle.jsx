import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html, body{
    background-color: rgb(255, 220, 154);
  }
`;

export default GlobalStyle;
