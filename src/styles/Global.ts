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
        text-rendering: optimizeLegibility;
        -webkit-font-font-smoothing: antialiased;

        background: linear-gradient(118.5deg, #8D65FF -1.84%, #A2DDFF 112.15%);
    }

    html, body, #root {
        height: 100vh;
    } 
`;

export { GlobalStyled }
