import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
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
        width: 100%;
        height: 100%;
        
    } 

    @media(max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 1366px) {
        html {
            font-size: 87.5%;
    }
    }
    @media(max-width: 768px) {
        html {
            font-size: 81.25%;
        }
    }
`;

export { GlobalStyled }
