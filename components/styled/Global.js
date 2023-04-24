import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-size:62.5%;
  font-family: sans;
  
}

body{
  margin-bottom:6rem;
}
image{
  max-width:100%;
}

`;

export default GlobalStyles;
