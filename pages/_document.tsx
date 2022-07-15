import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>Mercado Libre | Envíos a todo el país</title>
        <Head>
          <meta
            name='Mercado Libre'
            content='Productos y detalle de productos'
          />
          <link rel='shortcut icon' href='/images/favicon.svg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
