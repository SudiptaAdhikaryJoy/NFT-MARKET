import MainLayout from "@/components/layouts/MainLayout";
import React from "react";
import Head from "next/head";
import metaData from '../../public/meta.json'

const Home = () => {

  return (
    <>
    <Head>
      <title>Image Gallery</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content={metaData.type} />
        <meta property="og:image" content={metaData.image} />      
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <MainLayout/>
    </>
  );
};

export default Home;
