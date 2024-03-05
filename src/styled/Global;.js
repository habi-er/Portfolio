import { createGlobalStyle } from "styled-components"
import Montserrat from '/fonts/Montserrat/Montserrat-VariableFont_wght.ttf'
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Montserrat";
        src: url(${Montserrat});
        font-weight: 400;
        font-style: normal;
    }
    body {
        margin: 0;
        background-color: #000000;
        font-size: 18px;
        line-height: 1.6;
        color: #ffffff;
    }
    header {
        font-family: "Montserrat",sans-serif;;

    }
    a {
        text-decoration: none;
        color: #ffffff;
    }
    li {
        list-style: none;
    }
    section  {
        box-sizing: border-box;
        padding: 100px 0;
    }
    .inner {
        width: 100%;
        width: 50%;
        margin: auto;
        padding: 0px 40px;
        box-sizing: border-box;
        h2{
        font-size: 40px;
    }
    }
`;

export default GlobalStyle;