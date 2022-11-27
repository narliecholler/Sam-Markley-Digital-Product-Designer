import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText, globalStyles } from "../theme/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/ABCWhyteInktrapVariable-Trial.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          {globalStyles()}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
