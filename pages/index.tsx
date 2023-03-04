import type { NextPage } from "next";
import Head from "next/head";
import Dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const Process = Dynamic(() => import("@/components/Process/Section"), {
  ssr: false,
});
const CaseStudy = Dynamic(() => import("@/components/CaseStudy"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sam Markley | UI / UX Designer</title>
        <meta
          name="description"
          content="Sam Markley, UI / UX Designer located in London."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <section style={{ height: "100vh" }} />

      <CaseStudy />

      <Process />
    </>
  );
};

export default Home;
