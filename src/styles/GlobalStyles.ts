import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Mulish-Italics";
        src: url("/fonts/Mulish-Italic-VariableFont_wght.ttf") format("woff");
        font-style: normal;
        font-weight: 700;
    }
    @font-face {
        font-family: "Mulish-Regular";
        src: url("/fonts/Mulish-VariableFont_wght.ttf") format("woff");
        font-style: normal;
        font-weight: 600;
    }
   

    html {
        --ff-body: "Mulish-Regular";
        --ff-heading: "Mulish-Regular";
        scroll-behavior: smooth; 
    }
    *, ::before, ::after{
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }
    

    body{
        font-family: var(--ff-body);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        line-height: 1.6;
        margin: 0;
    }   
    }
`;
