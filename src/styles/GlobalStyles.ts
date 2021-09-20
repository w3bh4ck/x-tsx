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

    a {
        text-decoration: none;
    }
    & .mx-2 {
        margin-right: 10px;
        margin-left: 10px;
    }
     & .px-2 {
        padding-right: 10px;
        padding-left: 10px;
    }
     .pt-1 {
        padding-top: 5px;
    }
    .mt-1 {
        margin-top: 5px;
    }
    .mt-2 {
        margin-top: 15px;
    }
     .ml-1 {
        margin-left: 10px;
    }
     .d-flex {
        display: flex;
    }
    .subject {
        font-size: 14px;
    }
    .physics {
        color: #7B7FDA;
    }
    .mathematics {
        color: #EA7052;
    }
    .biology {
        color: #68BC98;
    }
     .chemistry {
        color: #F9AD6D;
    }
    }
`;
