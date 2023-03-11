import { styled } from '@/theme/index';
import type * as Stitches from '@stitches/react';

const ImgWrapper = styled('div', {
  overflowWrap: 'break-word',
});

export const CaseStudySection = styled('section', {
  padding: '3rem 20px',

  '&.color-black': {
    backgroundColor: '#121212',
    transition: 'background-color 1.5s ease',
  },

  '@bp1': {
    padding: '100px 100px',
  },

  '& ul': {
    textDecoration: 'none',
    listStyle: 'none',
    '& li:last-child': {
      '& div': {
        borderBottom: 'none',
      },
    },
  },
});

export const ProjectsHeading = styled('h2', {
  fontFamily: 'ABCMonumentGrotesk Regular',
  fontWeight: 400,
  color: '#fff',
  fontSize: '24px',
  paddingBottom: '1rem',
});

const CaseStudyWrapper = styled('div', {
  zIndex: 1,
  display: 'grid',
  position: 'relative',
  cursor: 'pointer',
  minHeight: '100px',
  gridTemplateColumns: 'auto 1fr',
  gridColumnGap: '5vw',
  alignItems: 'center',
  borderBottom: '1px solid white',
  transition: 'background-color 0.3s ease-out, border-color 0.3s ease-out',

  '@bp1': {
    minHeight: '200px',
    padding: '40px 0',
    gridTemplateColumns: '1fr 1fr',
  },

  '& .description': {
    display: 'none',

    '@bp1': {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',

      '& p': {
        width: '70%',
      },
    },
  },
  color: '#fff',
});

const LogoWrapper = styled('span', {});

const CaseStudyDescription = styled('div', {
  '&.cell--images': {
    display: 'none',
    alignContent: 'center',
    gridAutoColumns: 'auto',
    gridAutoFlow: 'column',
    placeContent: 'center end',
    gridGap: '1.5rem',
    justifyContent: 'end',
    marginLeft: 'auto',
    // padding: "70px 0",
  },

  '& .cell__img': {
    width: '106px',
    height: '106px',
    // display: "grid",

    position: 'relative',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto auto',
    willChange: 'transform, opacity',
    opacity: 0,
    display: 'none',
  },

  '@bp1': {
    '& .cell__img': {
      display: 'grid',
    },
  },

  '& .cell__img-inner': {
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    aspectRatio: 1,
    width: '100%',
    borderRadius: 'calc(var(1vw) / 3)',
  },
});

const Heading = styled('h3', {
  position: 'relative',
  overflow: 'hidden',

  variants: {
    brand: {
      microsoft: {
        '&.cell__title--switch': {
          [`& ${LogoWrapper}`]: {
            content:
              'url(/assets/portfolio/images/microsoft/MicrosoftLogo.svg)',
          },
        },
      },
      inhaus: {
        '&.cell__title--switch': {
          [`& ${LogoWrapper}`]: {
            content: 'url(/assets/portfolio/images/inhaus/InHausLogo.svg)',
          },
        },
      },
      gamdom: {
        '&.cell__title--switch': {
          [`& ${LogoWrapper}`]: {
            content: 'url(/assets/portfolio/images/gamdom/GamdomLogo.svg)',
          },
        },
      },
      stuartlochhead: {
        '&.cell__title--switch': {
          [`& ${LogoWrapper}`]: {
            content:
              'url(/assets/portfolio/images/stuartlochhead/StuartLochhead.svg)',
          },
        },
      },
      opalunderwriting: {
        '&.cell__title--switch': {
          [`& ${LogoWrapper}`]: {
            content: 'url(/assets/portfolio/images/opal/OpalLogo.svg)',
          },
        },
      },
    },
  },

  '& span': {
    fontFamily: 'ABCWhyteInktrap Regular',
    fontSize: 'clamp(2rem, 8vw, 3rem)',
    lineHeight: '58px',
    willChange: 'transform',
    display: 'inline-block',
  },
});

export type CSSHeadingVariants = Stitches.VariantProps<typeof Heading>;

const MobileIcon = styled('div', {
  position: 'absolute',
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '50%',
  transform: 'translate(0, -50%)',

  '@bp1': {
    display: 'none',
  },
});

export {
  CaseStudyWrapper,
  LogoWrapper,
  ImgWrapper,
  Heading,
  CaseStudyDescription,
  MobileIcon,
};
