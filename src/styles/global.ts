import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme["pink-50"]};
    }

    html{
        font-size: 16px;
    }

    body{
        background-color: ${({ theme }) => theme["pink-50"]};
        -webkit-font-smoothing: antialiased; /* para deixar a fonte mais suave no chrome */
        -moz-osx-font-smoothing: grayscale; /* para deixar a fonte mais suave no firefox */
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${({ theme }) => theme["gray-700"]};
    }

`;
