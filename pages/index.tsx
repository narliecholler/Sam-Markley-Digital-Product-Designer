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
