import { createGlobalStyle, styled } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

*{
    
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    font-family: "Space Grotesk", sans-serif;
}
`;

export default GlobalStyles;
