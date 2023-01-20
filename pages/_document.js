import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
 
    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
      <Head>
        {/* Favicons */}
        <link href="img/favicon.png" rel="icon" />
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      
        {/* Vendor CSS Files */}
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
        <link href="vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="vendor/aos/aos.css" rel="stylesheet" />
        {/* Template Main CSS File */}
        <link href="css/main.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        <script src="https://js.stripe.com/v3" async></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="vendor/glightbox/js/glightbox.min.js"></script>
        <script src="vendor/swiper/swiper-bundle.min.js"></script>
        <script src="vendor/aos/aos.js"></script>
        <script src="vendor/php-email-form/validate.js"></script>

        <script src="js/main.js"></script>
      </body>
    </Html>
    )
  }
}

export default MyDocument