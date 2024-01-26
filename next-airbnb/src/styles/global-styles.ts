import { createGlobalStyle, css } from "styled-components";
import { reset } from "styled-reset";
import palette from "./palette";

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Airbnb Cereal, sans-serif;
    line-height: 1.2;
    color: ${palette.black};
  }

  
  /* html, body { 
    width: 100%;
    height: 100%;
    min-width: 1200px;
    background-color: gray;
    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI;
    font-size : 16px;
    color: rgb(58, 58, 58);
  } */

  ul, ol {
    list-style: none;
  } 

  button {
    all: unset;
    cursor: pointer;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;
