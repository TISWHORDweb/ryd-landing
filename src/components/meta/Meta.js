import Head from 'next/head';
const Meta = () => {
   return (
      <Head>
         {/* <!-- HTML Meta Tags --> */}
         <title>RYD Learning - A Modern Online Learning and Personalized Education System</title>
         <meta name="description" content="At RYD Learning, we're passionate facilitators of curiosity and creators of tomorrow's innovators." />

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://rydlearning.com/" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content="RYD Learning - A Modern Online Learning and Personalized Education System" />
         <meta property="og:description" content="At RYD Learning, we're not just educators; we're passionate facilitators of curiosity and creators of tomorrow's innovators." />
         <meta property="og:image" content="/images/og.png" />

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta property="twitter:domain" content="rydlearning.com" />
         <meta property="twitter:url" content="https://rydlearning.com/" />
         <meta name="twitter:title" content="RYD Learning - A Modern Online Learning and Personalized Education System" />
         <meta name="twitter:description" content="At RYD Learning, we're not just educators; we're passionate facilitators of curiosity and creators of tomorrow's innovators." />
         <meta name="twitter:image" content="/images/og.png" />


         <meta charSet="UTF-8" />
         <meta name="keywords" content="ryd, learning, lms, ryd learning,  virtual learning" />
         <meta name="author" content="ryd institute" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />

        {/* Google tag (gtag.js)  */}
         {/* <script>
            window.dataLayer = window.dataLayer || [];
         </script>
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-RP4G10JVJK"></script>
         <script>
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-RP4G10JVJK');
         </script> */}
      </Head>
   );
};

export default Meta;