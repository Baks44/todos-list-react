import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
    
  body {
    font-family: 'Monstserrat', sans-serif;
    background: ${({ theme }) => theme.color.gallery};
  }
`;

export default GlobalStyle;
