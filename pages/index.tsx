import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Dynamic from 'next/dynamic';
import getAllHomepageContent from 'lib/api/queries/homepage';
import Hero from '@/components/Hero';

const Process = Dynamic(() => import('@/components/Process/Section'), {
  ssr: false,
});
const CaseStudy = Dynamic(() => import('@/components/CaseStudy'), {
  ssr: false,
});

interface HeroContent {
  heroTitleBold: string;
  heroTitle: string;
  heroDescription: string;
}

interface HomepageProps {
  hero: HeroContent;
}

const Home: NextPage<HomepageProps> = ({ hero }) => (
  <>
    <Head>
      <title>Sam Markley | UI / UX Designer</title>
      <meta
        name="description"
        content="Sam Markley, UI / UX Designer located in London."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Hero
      title={hero.heroTitle}
      titleBold={hero.heroTitleBold}
      description={hero.heroDescription}
    />

    <section style={{ height: '100vh' }} />

    <CaseStudy />

    <Process />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const {
    pageBy: { homepageContent },
  } = await getAllHomepageContent();

  return {
    props: {
      hero: {
        heroTitleBold: homepageContent.heroBoldTitle,
        heroTitle: homepageContent.heroTitle,
        heroDescription: homepageContent.heroDescription,
      },
    },
    revalidate: 10,
  };
};

export default Home;
