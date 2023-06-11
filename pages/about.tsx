import React from 'react';
import Spline from '@splinetool/react-spline';
import {
  AboutWrapper,
  HeroSection,
  HeroHeader,
  SplineWrapper,
  TitleWrapper,
  HeroFooter,
} from '@/styles/about.styles';

const AboutPage = () => (
  <AboutWrapper>
    <HeroSection>
      <HeroHeader>
        <SplineWrapper>
          <Spline
            scene="https://prod.spline.design/CLRUg8vjSIYDi4FW/scene.splinecode"
            style={{ width: '85%', height: '85%' }}
          />
        </SplineWrapper>
        <TitleWrapper>
          <h1>
            I have been honoured to work with <span>small and large</span>{' '}
            companies around the world.
          </h1>
          <p>
            I’m enthusiastic about crafting ideas, visual elements, motion and
            typography into memorable creations.
          </p>
        </TitleWrapper>
      </HeroHeader>
      <HeroFooter>
        <div></div>
      </HeroFooter>
    </HeroSection>
  </AboutWrapper>
);

export default AboutPage;
