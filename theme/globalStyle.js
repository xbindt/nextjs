import styled, { createGlobalStyle, css } from 'styled-components';

export const theme1 = {
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#eb238e',
    light: '#f4f4f4',
    dark: '#222',
  };

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'krona_oneregular';
        src: url('/fonts/kronaone-regular-webfont.woff2') format('woff2'),
            url('/fonts/kronaone-regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: krona_oneregular, sans-serif;
    }

    th {
        font-family: krona_oneregular;
    }
`;