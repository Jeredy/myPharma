import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
    }

    html, body {
        overflow-x: hidden;
        background: rgba(143, 138, 166, 0.1);
    }
`;

export default GlobalStyle;
