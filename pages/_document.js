// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'



export default class MyDocument extends Document {
  render() {
    return (
      <html lang="nl-Nl">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link rel="shortcut icon" href="/assets/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
//https://github.com/P233/nextjs-with-scss/blob/master/package.json

// import Document, { Head, Main, NextScript } from 'next/document';
// import styled, { keyframes, ThemeProvider, ServerStyleSheet } from "styled-components";
// import { theme } from "./theme/globalStyle";

// export default class MyDocument extends Document {
//   static async getInitialProps (ctx) {
//     const sheet = new ServerStyleSheet()
//     const originalRenderPage = ctx.renderPage

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: App => props => sheet.collectStyles(
//           <App {...props} >
//             <ThemeProvider theme={theme}>
//               <Main />
//               <NextScript />
//             </ThemeProvider>
//           </App>
//           )
//         })

//       const initialProps = await Document.getInitialProps(ctx)
//       return {
//         ...initialProps,
//         styles: [...initialProps.styles, ...sheet.getStyleElement()]
//       }
//     } finally {
//       sheet.seal()
//     }
//   }
// }