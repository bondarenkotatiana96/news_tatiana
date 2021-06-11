import styled, { createGlobalStyle }from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #333;
    background-color: #F9DBDB;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
  }
`;

export const StoriesContainerWrapper = styled.main`
  max-width: 100%;
  padding: 20px 50px;
`;
