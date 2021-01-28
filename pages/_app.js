import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import MDXComponents from "../components/mdx-components";
import Nav from "../components/nav";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <title>Stephan de Vries</title>
        <meta
          name="description"
          content="The portfolio website of Stephan de Vries – animal rights activist and full stack developer based in Amsterdam."
        />
      </Head>
      <div className="min-h-screen container mx-auto flex flex-col p-8 sm:p-16 space-y-16">
        <Nav />
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  );
}

export default MyApp;
