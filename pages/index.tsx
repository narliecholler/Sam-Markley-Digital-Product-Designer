import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image";
import Hero from "@/components/Hero";
import ThreeDee from "@/components/3D/3D";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <ThreeDee />
    </>
  );
};

export default Home
