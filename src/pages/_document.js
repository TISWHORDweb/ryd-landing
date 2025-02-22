import { Html,Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {


  return (
    <Html lang="en">
      <Head>
      <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Solway:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
         <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-RP4G10JVJK`}
        />
      {/* analytics  */}
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RP4G10JVJK')
         `}
      </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
