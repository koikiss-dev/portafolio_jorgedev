import React from "react";
import Head from "next/head";
import Navigation from "../../components/Navigation";
const IndexLayaut = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="JorgeDevJ" />
      </Head>
      <header>
        <Navigation />
      </header>
      {children}
    </>
  );
};

export default IndexLayaut;
