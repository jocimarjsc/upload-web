import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Inter', sans-serif;
    }
`;

export { GlobalStyled }
