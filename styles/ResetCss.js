import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --karla: 'Karla', sans-serif;
        --rubik: 'Rubik', sans-serif;
        --bg-primary: #0b0f15;
        --primary-color: #2f80ff;
        --secondary-color: #1d232b; 
    }    

*, *::after, *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 16px;
        font-family: var(--karla);
        background-color: var(--bg-primary);
        color: #fff;
    }
    image{
        max-width: 100%;
        heigth: auto;
        object-fit: cover;
    }
    a{
        text-decoration: none;
    }
`;
