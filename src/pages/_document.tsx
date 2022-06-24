import { RenderPageResult } from 'next/dist/shared/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
          <meta property="og:title" content="내꺼 배달비 반띵하러 가기 🛵" />
          <meta name="Keywords" content="내꺼도" />
          <meta httpEquiv="X-UA-Compatible" content="IE-edge" />

          <meta
            name="Description"
            content="우리 동네 배달비 더치페이 어플리케이션 내꺼도 입니다."
          />

          <meta
            property="og:description"
            content="우리 동네 배달비 반띵 프로젝트<br/>지금 나와 같은 음식을 떠올리고 있는 사람과 대화해보세요!"
          />
          <meta property="og:url" content="https://naeggeodo.com/" />
          <meta property="og:url" content="https://naeggeodo.com/chat-rooms" />
          <meta property="og:url" content="https://naeggeodo.com/mypage" />
          <meta property="og:url" content="https://naeggeodo.com/progress" />
          <meta property="og:url" content="https://naeggeodo.com/search" />
          <meta property="og:url" content="https://naeggeodo.com/create" />

          <meta property="og:image" content="/assets/images/logo.svg" />
        </Head>
        <body
          onLoad={() => {
            setTimeout(() => {
              window.scrollTo(0, 1);
            }, 100);
          }}>
          <div id="webviewPortal"></div>
          <div id="loginPortal"></div>
          <div id="reportPortal"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
