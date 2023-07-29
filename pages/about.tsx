import React from 'react';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
import {
  AboutWrapper,
  HeroSection,
  HeroHeader,
  SplineWrapper,
  TitleWrapper,
  HeroFooter,
  LogosWrapper,
  PillarSection,
  PillarGrid,
  QuoteSection,
} from '@/styles/about.styles';
import Pillar from '@/components/Pillar';
import Quote from '@/components/Quote';

const aboutImages = [
  '/assets/about/SamMarkley-Artworld.svg',
  '/assets/about/SamMarkley-InHaus.svg',
  '/assets/about/SamMarkley-Microsoft.svg',
  '/assets/about/SamMarkley-Nike.svg',
  '/assets/about/SamMarkley-Selfridges.svg',
];

const pillarInformation = [
  {
    id: 1,
    icon: 'stylus',
    title: 'Workshops',
    subtitle: 'Define roadmap',
    bgColor: '#E4D9FD',
  },
  {
    id: 2,
    icon: 'box',
    title: 'User Experience',
    subtitle: 'Demistify research',
    bgColor: '#CAE7F5',
  },
  {
    id: 3,
    icon: 'shape',
    title: 'User Interface',
    subtitle: 'Defining your product',
    bgColor: '#F7D4D4',
  },
  {
    id: 4,
    icon: 'prototype',
    title: 'Prototype & Test',
    subtitle: 'Become data-led',
    bgColor: '#FDF3D9',
  },
];

const quoteInformation = [
  {
    id: 1,
    title:
      "I've seen him be highly effective both at leading projects and working with other designers and team mates to deliver awesome work.",
    subtitle:
      "Sam is a great designer to work with, he has a high attention to detail and isn't afraid to question the underlying motives and intentions behind a design or business process in order to get the best out of the process.",
    name: 'Oli Ingram',
    details: 'Product Designer at Meta',
  },
  {
    id: 2,
    title:
      'We’ve had a great experience working with Sam. He’s inspiring, brings great ideas to the table and always responsive.',
    subtitle:
      'We’ve received such good feedback regarding his UI design that we are already collaborating again and will continue to do so into the future.',
    name: 'Isabella Sumner',
    details: 'Founder & CEO of InHaus App',
  },
];

const image = (url: string) => (
  <Image src={url} alt="logo" width={116} height={40} />
);

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
        <LogosWrapper>{aboutImages.map((url) => image(url))}</LogosWrapper>
      </HeroFooter>
    </HeroSection>
    <PillarSection>
      <h2>
        Brands and experiences should be based on two key pillars, strategy and
        creativity. This is the foundation for effective results.
      </h2>
      <p>
        Building upon this foundation while user experience design enhances
        engagement and satisfaction. In parallel, seamless user interface
        development ensures intuitive interactions, while prototypes and tests
        validate ideas, refining them into successful solutions.
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
    </PillarSection>
    <QuoteSection>
      {quoteInformation.map((i) => (
        <Quote
          key={i.id}
          quote={{ title: i.title, subtitle: i.subtitle }}
          person={{ name: i.name, details: i.details }}
        />
      ))}
    </QuoteSection>
  </AboutWrapper>
);

export default AboutPage;
