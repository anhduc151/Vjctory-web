
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans&family=Oxanium&family=Prompt:wght@600&family=Roboto&family=Sigmar+One&family=Tilt+Prism&family=Titan+One&display=swap"
          rel="stylesheet"
        />

        {/* add gg tag manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WQJ9DLZ');
              `,
          }}
        />
        {/* end add gg tag manager */}
        {/* add gg analytics GA-4 (new) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KEGKSE5Q8Z"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-KEGKSE5Q8Z');
              `,
          }}
        />

        {/* gg analytics UA */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-273623215-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-273623215-1');
              `,
          }}
        />


        {/* end add gg analytics */}
      </Head>
      <body>

        {/* gg tag manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQJ9DLZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
