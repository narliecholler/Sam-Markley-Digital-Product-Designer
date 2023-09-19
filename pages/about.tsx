import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
// import { Application } from '@splinetool/runtime';
import Spline from '@splinetool/react-spline';
import {
  HeroSection,
  HeroHeader,
  SplineWrapper,
  TitleWrapper,
  HeroFooter,
  LogosWrapper,
  PillarWrapper,
  PillarGrid,
  QuoteWrapper,
} from '@/styles/about.styles';
import { SectionContainer } from '@/components/Template';
import Pillar from '@/components/Pillar';
import Quote from '@/components/Quote';
import {
  aboutImages,
  pillarInformation,
  quoteInformation,
} from '@/lib/constants';

const image = (url: string) => (
  <Image src={url} alt="logo" width={116} height={40} />
);

const AboutPage = () => {
  // const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // useEffect(() => {
  //   if (canvasRef.current) {
  //     const app = new Application(canvasRef.current);
  //     app.load('https://prod.spline.design/CLRUg8vjSIYDi4FW/scene.splinecode');
  //   }
  // }, []);

  return (
    <>
      <SectionContainer backgroundColor="black">
        <HeroSection>
          <HeroHeader>
            <SplineWrapper>
              {/* <canvas ref={canvasRef} /> */}
              {/* <Spline scene="https://prod.spline.design/CLRUg8vjSIYDi4FW/scene.splinecode" /> */}
            </SplineWrapper>
            <TitleWrapper>
              <h1>
                I have been honoured to work with <span>small and large </span>
                companies around the world.
              </h1>
              <p>
                I’m enthusiastic about crafting ideas, visual elements, motion
                and typography into memorable creations.
              </p>
            </TitleWrapper>
          </HeroHeader>
          <HeroFooter>
            <LogosWrapper>{aboutImages.map((url) => image(url))}</LogosWrapper>
          </HeroFooter>
        </HeroSection>
      </SectionContainer>

      <SectionContainer backgroundColor="light">
        <PillarWrapper>
          <h2>
            Brands and experiences should be based on two key pillars, strategy
            and creativity. This is the foundation for effective results.
          </h2>
          <p>
            Building upon this foundation while user experience design enhances
            engagement and satisfaction. In parallel, seamless user interface
            development ensures intuitive interactions, while prototypes and
            tests validate ideas, refining them into successful solutions.
          </p>
          <PillarGrid>
            {pillarInformation.map((i) => (
              <Pillar
                key={i.id}
                icon={i.icon}
                title={i.title}
                subtitle={i.subtitle}
                bgColor={i.bgColor}
              />
            ))}
          </PillarGrid>
        </PillarWrapper>
      </SectionContainer>

      <SectionContainer backgroundColor="black">
        <QuoteWrapper>
          {quoteInformation.map((i) => (
            <Quote
              key={i.id}
              quote={{ title: i.title, subtitle: i.subtitle }}
              person={{ name: i.name, details: i.details }}
            />
          ))}
        </QuoteWrapper>
      </SectionContainer>
    </>
  );
};

export default AboutPage;
