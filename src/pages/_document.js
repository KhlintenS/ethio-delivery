import SettingServices from "@services/SettingServices";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Fetch general metadata from backend API
    const setting = await SettingServices.getStoreSeoSetting();

    return { ...initialProps, setting };
  }

  render() {
    const setting = this.props.setting;
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" 
          href={
            // setting?.favicon || 
            "/favicon2.png"} />
          <meta
            property="og:title"
            content={
              setting?.meta_title ||
              "ETH Delivery - React E-Commerce Website  for the UAE"
            }
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta
            property="og:description"
            content={
              setting?.meta_description ||
              "A modern React-based e-commerce template offering multi-category support, secure payments, and seamless shopping experiences in the UAE."
            }
          />
          <meta
            name="keywords"
            content={setting?.meta_keywords || "ecommerce, online shopping, UAE"}
          />
          <meta
            property="og:url"
            content={
              setting?.meta_url || "https://eth-delivery.vercel.app/"
            }
          />
          <meta
            property="og:image"
            content={
              setting?.meta_img ||
              "https://res.cloudinary.com/eth-delivery/image/upload/v1636729752/eth-delivery-logo.png"
            }
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

export default MyDocument;
