import { MenuItem } from './types';

export const workProcesses = [
  {
    id: 1,
    title: 'Immerse',
    text: 'Going deep into client’s business to understand its core sense, goals and challenges to build partnership.',
  },
  {
    id: 2,
    title: 'Strategise',
    text: 'Our planning process turns research into a clear set of action items to meet business goals. ',
  },
  {
    id: 3,
    title: 'Wireframe',
    text: 'Building the foundation, structure and core elements of a digital product.',
  },
  {
    id: 4,
    title: 'Design',
    text: 'Adding colors, illustrations and shapes to create visual language that resonates with customers.',
  },
  {
    id: 5,
    title: 'Launch',
    text: 'During the Implementation, the job is to translate creative into a full program that goes live.',
  },
  {
    id: 6,
    title: 'Evolve',
    text: 'By tracking performance, we then initiate new strategies to maximize your business goals.',
  },
];

export const menuItemList: MenuItem[] = [
  {
    id: 1,
    title: 'About',
    description: 'My experience and testimonials',
    pathname: '/about',
  },
  {
    id: 2,
    title: 'Portfolio',
    description: 'From finance technology to ice baths.',
    pathname: '/portfolio',
  },
  {
    id: 3,
    title: 'Contact',
    description: 'Enquire about your ideas',
    pathname: '/contact',
  },
];

export const caseStudies = [
  {
    id: 'microsoft',
    company: 'Microsoft',
    text: 'Re-design the entire AMS storefront for the launch of Microsofts new Surface range.',
    logo: '/assets/portfolio/microsoft/MicrosoftLogo.svg',
    collection: [
      '/assets/portfolio/images/microsoft/microsoft1.png',
      '/assets/portfolio/images/microsoft/microsoft2.png',
      '/assets/portfolio/images/microsoft/microsoft3.png',
    ],
  },
  {
    id: 'inhaus',
    company: 'InHaus',
    text: 'UX/UI design for an app that will revolutionise e-commerce fashion photography',
    logo: '/assets/portfolio/inhaus/inhaus.svg',
    collection: [
      '/assets/portfolio/images/inhaus/inhaus1.png',
      '/assets/portfolio/images/inhaus/inhaus2.png',
      '/assets/portfolio/images/inhaus/inhaus3.png',
    ],
  },
  {
    id: 'gamdom',
    company: 'Gamdom',
    text: 'Using blockchain technology to live trade and win CS:GO gaming weapon skins',
    logo: '/assets/portfolio/gamdom/gamdom.svg',
    collection: [
      '/assets/portfolio/images/gamdom/gamdom1.png',
      '/assets/portfolio/images/gamdom/gamdom2.png',
      '/assets/portfolio/images/gamdom/gamdom3.png',
    ],
  },
  {
    id: 'stuartlochhead',
    company: 'Stuart Lochhead',
    text: 'Branding, website, and online business setup for Stuart Lochhead Sculpture',
    logo: '/assets/portfolio/stuartlochhead/stuartlochhead.svg',
    collection: [
      '/assets/portfolio/images/stuartlochhead/stuartlochhead1.png',
      '/assets/portfolio/images/stuartlochhead/stuartlochhead2.png',
      '/assets/portfolio/images/stuartlochhead/stuartlochhead3.png',
      '/assets/portfolio/images/stuartlochhead/stuartlochhead4.png',
    ],
  },
  {
    id: 'opalunderwriting',
    company: 'Opal',
    text: 'Re-design the entire AMS storefront for the launch of Microsofts new Surface range.',
    logo: '/assets/portfolio/opal/opalunderwriting.svg',
    collection: ['/assets/portfolio/images/opal/opal1.png'],
  },
];

/**
 * About page
 */
export const aboutImages = [
  '/assets/about/SamMarkley-Artworld.svg',
  '/assets/about/SamMarkley-InHaus.svg',
  '/assets/about/SamMarkley-Microsoft.svg',
  '/assets/about/SamMarkley-Nike.svg',
  '/assets/about/SamMarkley-Selfridges.svg',
];

export const pillarInformation = [
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

export const quoteInformation = [
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

/**
 * all the data for the base portfolio page. Each portfolio item has a different filter and so we
 * return the SVG element within here for ease.
 */
export const portfolioInformation = [
  {
    title: 'InHaus',
    subtitle: 'B2B',
    information:
      'RE-DESIGN THE ENTIRE AMS STOREFRONT FOR THE LAUNCH OF MICROSOFTS NEW SURFACE RANGE.',
    image: () => (
      <svg
        className="content__img content__img--2"
        width="1000"
        height="450"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 450"
      >
        <defs>
          <filter id="displacementFilter2">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.1"
              numOctaves="1"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              result="displacement"
              scale="100"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMorphology
              operator="dilate"
              radius="2"
              result="morph"
              in="displacement"
            />
          </filter>
          <mask id="circleMask2">
            <circle
              cx="50%"
              cy="50%"
              r="0"
              data-value-final="950"
              fill="white"
              className="mask"
              style={{ filter: 'url(#displacementFilter2)' }}
            />
          </mask>
        </defs>
        <image
          xlinkHref="/assets/portfolio/images/inhaus/portfolio-item.png"
          width="1000"
          height="450"
          mask="url(#circleMask2)"
        />
      </svg>
    ),
  },
  {
    title: 'Gamdom',
    subtitle: 'B2C',
    information:
      'RE-DESIGN THE ENTIRE AMS STOREFRONT FOR THE LAUNCH OF MICROSOFTS NEW SURFACE RANGE.',
    image: () => (
      <svg
        className="content__img content__img--3"
        width="1000"
        height="560"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 560"
      >
        <defs>
          <filter id="displacementFilter3">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.1"
              numOctaves="1"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              result="displacement"
              scale="100"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMorphology
              operator="dilate"
              radius="2"
              result="morph"
              in="displacement"
            />
          </filter>
          <mask id="circleMask3">
            <circle
              cx="50%"
              cy="50%"
              r="0"
              data-value-final="950"
              fill="white"
              className="mask"
              style={{ filter: 'url(#displacementFilter3)' }}
            />
          </mask>
        </defs>
        <image
          xlinkHref="/assets/portfolio/images/gamdom/portfolio.png"
          width="1000"
          height="450"
          mask="url(#circleMask3)"
        />
      </svg>
    ),
  },
  {
    title: 'Gamdom',
    subtitle: 'B2C',
    information:
      'RE-DESIGN THE ENTIRE AMS STOREFRONT FOR THE LAUNCH OF MICROSOFTS NEW SURFACE RANGE.',
    image: () => (
      <svg
        className="content__img content__img--3"
        width="1000"
        height="560"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 560"
      >
        <defs>
          <filter id="displacementFilter4">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.1"
              numOctaves="1"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              result="displacement"
              scale="100"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feMorphology
              operator="dilate"
              radius="2"
              result="morph"
              in="displacement"
            />
          </filter>
          <mask id="circleMask4">
            <circle
              cx="50%"
              cy="50%"
              r="0"
              data-value-final="950"
              fill="white"
              className="mask"
              style={{ filter: 'url(#displacementFilter4)' }}
            />
          </mask>
        </defs>
        <image
          xlinkHref="/assets/portfolio/images/gamdom/portfolio.png"
          width="1000"
          height="450"
          mask="url(#circleMask4)"
        />
      </svg>
    ),
  },
];
