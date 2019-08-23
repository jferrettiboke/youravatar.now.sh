import Document, { Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Make your avatar</title>
          <meta name="description" content="Make your avatar now." />
          <meta name="keywords" content="avatar, maker, creator" />
          {/* <link rel="shortcut icon" href="/static/images/logo.png" /> */}
          <link
            href="https://unpkg.com/tailwindcss@1.0.5/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </head>
        <body className="font-sans text-black antialiased">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
