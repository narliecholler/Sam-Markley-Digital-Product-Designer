import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Dynamic from 'next/dynamic';
// import getAllHomepageContent from 'lib/api/queries/homepage';
import Hero from '@/components/Hero';
import { WorkingProcesses, Process } from '@/styles/home.styles';
import workProcesses from '@/lib/constants';
import ProcessItem from '@/components/Process';

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

const Home: NextPage<HomepageProps> = () => (
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
      titleBold="Defining the future "
      title="through research and elegant digital product design."
      description="Sam is a Senior Product Designer based in London. He's had the privilege of helping to deliver exciting experiences and beautiful user interfaces globally."
    />

    {/**
     * placeholder for 3D
     */}
    <section style={{ height: '100vh' }} />

    <CaseStudy />

    <WorkingProcesses id="workingProcesses">
      <h2>Working Processes</h2>
      {workProcesses.map((i) => (
        <Process key={`${i.id}`}>
          <ProcessItem title={i.title} text={i.text} className="card" />
        </Process>
      ))}
    </WorkingProcesses>
  </>
);

// export const getStaticProps: GetStaticProps = async () => {
// const {
//   pageBy: { homepageContent },
// } = await getAllHomepageContent();
// return {
//   props: {
//     hero: {
//       heroTitleBold: homepageContent.heroBoldTitle,
//       heroTitle: homepageContent.heroTitle,
//       heroDescription: homepageContent.heroDescription,
//     },
//   },
//   revalidate: 10,
// };
// };

export default Home;
