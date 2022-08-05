import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --texty-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font-size: 16px (Desktop)
html {
    @media (max-width: 1080px){    //  16*0.9375 = 15px
        font-size: 93.75%;             
    }                                                       

    @media (max-width: 720){      //   16*0.875 = 14px
        font-size: 87,5%;
    }
}

 // REM = 1rem = font-size = 16px

body{
background: var(--background);
-webkit-font-smoothing: antialiased;  
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed
}
`