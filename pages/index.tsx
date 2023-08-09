import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
  // AnimatedLine,
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
  useEffect(() => {}, []);

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
          <HeroFooterWrapper>
            <video
              src="/assets/videos/Clay.mp4"
              autoPlay={true}
              loop
              width="1327"
              height="614"
              className="svg-clipped-text"
              style={{
                clipPath: 'url(#hero-clip-path)',
                height: '100%',
                width: '100%',
              }}
            >
              <source src="/assets/videos/Clay.mp4" type="video/mp4" />
            </video>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0"
              height="0"
              viewBox="0 0 1327 614"
              fill="none"
            >
              <defs>
                <clipPath id="hero-clip-path">
                  <path
                    d="M487.486 0H859.686C887.853 0 910.686 22.8335 910.686 51V72.7327C910.686 100.899 933.52 123.733 961.686 123.733H1189C1217.17 123.733 1240 146.566 1240 174.733V263.306C1240 291.472 1217.17 314.306 1189 314.306H1053.84C1025.68 314.306 1002.84 337.139 1002.84 365.306V377.87C1002.84 406.036 980.008 428.87 951.842 428.87H908.232C880.065 428.87 857.232 451.703 857.232 479.87V563C857.232 591.167 834.398 614 806.232 614H473.82C445.653 614 422.82 591.167 422.82 563V489.793C422.82 461.626 399.986 438.793 371.82 438.793H51C22.8335 438.793 0 415.959 0 387.793V234.423C0 206.256 22.8335 183.423 51 183.423H385.486C413.653 183.423 436.486 160.589 436.486 132.423V51C436.486 22.8335 459.319 0 487.486 0Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
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
          </HeroFooterWrapper>
        </HeroWrapper>
      </SectionContainer>

      {/* Designing for People */}
      <SectionContainer backgroundColor="black">
        <DesigningSection>
          <Box columns="5" background="light">
            <h2>Designing for people</h2>
            <span></span>
            <p>Creative design attracts people. Smart UX makes them stay.</p>
          </Box>
          <Box columns="7" background="dark"></Box>
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
      <SectionContainer backgroundColor="light">
        <WorkProcesses />
      </SectionContainer>
    </>
  );
};

export default Home;
