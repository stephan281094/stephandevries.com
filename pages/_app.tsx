import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stephan de Vries</title>
        <meta
          name="description"
          content="The portfolio website of Stephan de Vries – animal rights activist and full stack developer based in Amsterdam."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
