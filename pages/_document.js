import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";

import Meta from "../layout/meta";
import { GlobalStyle } from "../layout/GlobalStyle";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // setGoogleTags() {
  //   return {
  //     __html: `
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());
  //     gtag('config', 'UA-143351878-1');
  //     `
  //   };
  // }

  render() {
    return (
      <Html>
        <Head>
          <title>Letiště XOXO</title>
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-143351878-1"
          /> */}
          {/* <script dangerouslySetInnerHTML={this.setGoogleTags()} /> */}
          <Meta />
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
