import { useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Youtube from 'react-youtube';
import Button from '@/components/Button';
import arrowDown from 'react-useanimations/lib/arrowDown';
import { AnimatedIcon } from '@/components/Icon';
import WorkProcesses from '@/components/work-process';
import CaseStudy from '@/components/case-study';
import { SectionContainer } from '@/components/Template';
import { theme } from '@/theme/theme';
import {
  WorkingProcesses,
  HeroWrapper,
  HeroFooterWrapper,
  Footer,
  DesignerDetails,
  ScrollWrapper,
  DesigningSection,
  Box,
  ProjectsHeading,
} from '@/styles/home.styles';
import { caseStudies } from '@/lib/constants';

interface HeroContent {
  heroTitleBold: string;
  heroTitle: string;
  heroDescription: string;
}

interface HomepageProps {
  hero: HeroContent;
}

const Home: NextPage<HomepageProps> = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

      {/* hero */}
      <SectionContainer backgroundColor="black">
        <HeroWrapper id="home-hero">
          <h1>
            Defining
            <br /> the future
          </h1>
          <h2>
            through elegant <br /> digital product design.
          </h2>
          <HeroFooterWrapper>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1864 614"
            >
              <defs>
                <clipPath clipPathUnits="objectBoundingBox" id="hero-clip-path">
                  <path d="M0.398,0 h0.482 c0.015,0,0.027,0.037,0.027,0.083 v0.035 c0,0.046,0.012,0.083,0.027,0.083 h0.038 c0.015,0,0.027,0.037,0.027,0.083 v0.144 c0,0.046,-0.012,0.083,-0.027,0.083 h-0.137 c-0.015,0,-0.027,0.037,-0.027,0.083 v0.021 c0,0.046,-0.012,0.083,-0.027,0.083 h-0.163 c-0.015,0,-0.027,0.037,-0.027,0.083 V0.917 c0,0.046,-0.012,0.083,-0.027,0.083 H0.235 c-0.015,0,-0.027,-0.037,-0.027,-0.083 v-0.068 c0,-0.046,-0.012,-0.083,-0.027,-0.083 H0.027 c-0.015,0,-0.027,-0.037,-0.027,-0.083 v-0.128 c0,-0.046,0.012,-0.083,0.027,-0.083 h0.316 c0.015,0,0.027,-0.037,0.027,-0.083 V0.083 C0.371,0.037,0.383,0,0.398,0" />
                </clipPath>
              </defs>
            </svg>
            <div id="video-wrapper">
              <div id="video-inner-wrapper">
                <video
                  ref={videoRef}
                  src="/assets/videos/Clay.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/videos/Clay.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </HeroFooterWrapper>

          <Footer>
            <DesignerDetails>
              <p>
                {
                  "Sam is a Senior Product Designer based in London. He's had the privilege of helping to deliver exciting experiences and beautiful user interfaces globally."
                }
              </p>

              <div>
                <Button text="Contact" stroke="dark" />
                <span></span>
              </div>
            </DesignerDetails>
            <ScrollWrapper>
              <p>Scroll down to learn more</p>
              <AnimatedIcon
                type={arrowDown}
                stroke={theme.colors.white as unknown as string}
              />
            </ScrollWrapper>
          </Footer>
        </HeroWrapper>
      </SectionContainer>

      {/* Designing for People */}
      <SectionContainer backgroundColor="black">
        <DesigningSection>
          <Box id="design-creative" columns="5" background="light">
            <h2>Designing for people</h2>
            <span></span>
            <p>Creative design attracts people. Smart UX makes them stay.</p>
          </Box>
          <Box
            columns="7"
            background="dark"
            id="custom-video"
            style={{ padding: 0 }}
          >
            <Youtube className="video" videoId="RXidlUSBhMY" />
          </Box>
        </DesigningSection>
      </SectionContainer>

      {/* Case Study */}
      <SectionContainer backgroundColor="black">
        <ProjectsHeading>Selected Projects</ProjectsHeading>
        <ul>
          {caseStudies.map((i, index) => {
            const { id, company, collection, text } = i;

            return (
              <CaseStudy
                key={id}
                id={id}
                title={company}
                images={collection}
                text={text}
                index={index}
              />
            );
          })}
        </ul>
      </SectionContainer>

      {/* placeholder for work processes */}
      <SectionContainer backgroundColor="black">
        <WorkProcesses />
      </SectionContainer>
    </>
  );
};

export default Home;
