import { useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Youtube from 'react-youtube';
import Button from '@/components/button';
import arrowDown from 'react-useanimations/lib/arrowDown';
import { AnimatedIcon } from '@/components/icon';
import WorkProcesses from '@/components/work-process';
import CaseStudy from '@/components/case-study';
import { SectionContainer } from '@/components/template';
import { theme } from '@/lib/theme/theme';
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
      <SectionContainer background-color="black">
        <HeroWrapper id="home-hero">
          <h1>Defining the future</h1>
          <h2>
            through elegant <br /> digital product design.
          </h2>
          <HeroFooterWrapper>
            <svg
              width="1240"
              id="Layer_1"
              height="614"
              viewBox="0 0 1240 614"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath clipPathUnits="objectBoundingBox" id="hero-clip-path">
                  <path
                    d="M0.412,0 H0.866 C0.889,0,0.907,0.037,0.907,0.083 V0.118 C0.907,0.164,0.926,0.202,0.948,0.202 H0.959 C0.982,0.202,1,0.239,1,0.285 V0.429 C1,0.475,0.982,0.512,0.959,0.512 H0.85 C0.827,0.512,0.809,0.549,0.809,0.595 V0.615 C0.809,0.661,0.79,0.698,0.768,0.698 H0.632 C0.61,0.698,0.591,0.736,0.591,0.782 V0.917 C0.591,0.963,0.573,1,0.55,1 H0.248 C0.226,1,0.207,0.963,0.207,0.917 V0.849 C0.207,0.803,0.189,0.766,0.166,0.766 H0.041 C0.018,0.766,0,0.729,0,0.683 V0.555 C0,0.509,0.018,0.471,0.041,0.471 H0.329 C0.352,0.471,0.371,0.434,0.371,0.388 V0.083 C0.371,0.037,0.389,0,0.412,0"
                    fill="white"
                  />
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
      <SectionContainer background-color="black">
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
      <SectionContainer background-color="black">
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
      <SectionContainer background-color="black">
        <WorkProcesses />
      </SectionContainer>
    </>
  );
};

export default Home;
