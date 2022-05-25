import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  
  button{
    cursor: pointer;
    transition: all 0.2s;
  }
  button:hover{
      opacity: 0.8;
  }
  html, body, #root{
    min-height:100%;
  }
  ul{
    list-style: none;
  }
  body{
    background: #FAFAFA;
    color: #333333;
    -webkit-font-smoothing: antialiased !important;
  }
`;
