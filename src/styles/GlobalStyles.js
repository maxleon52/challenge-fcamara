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
  }
  html, body, #root{
    min-height:100%;
  }
  ul{
    list-style: none;
  }
  body{
    background-color: #E5E5E5;;
    color: #333333;
    -webkit-font-smoothing: antialiased !important;
  }
`;
