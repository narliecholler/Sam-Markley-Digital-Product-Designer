import { styled } from '@/theme/index';

export const ImgWrapper = styled('div', {
  overflowWrap: 'break-word',
});

export const CaseStudyWrapper = styled('li', {
  '&:last-child': {
    '& .animatedBorder': {
      display: 'none',
    },
  },
});

export const CaseStudyInner = styled('div', {
  zIndex: 1,
  display: 'grid',
  position: 'relative',
  cursor: 'pointer',
  minHeight: '100px',
  gridTemplateColumns: 'auto 1fr',
  gridColumnGap: '5vw',
  alignItems: 'center',
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
    },
  },
  color: '#fff',
});

export const LogoWrapper = styled('span', {});

export const CaseStudyDescription = styled('div', {
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

export const Heading = styled('h3', {
  position: 'relative',
  overflow: 'hidden',
  fontSize: 'clamp(2rem, 8vw, 3rem)',
  lineHeight: '58px',

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
    willChange: 'transform',
    display: 'inline-block',
  },
});

export const MobileIcon = styled('div', {
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

export const AnimatedLine = styled('div', {
  background: '#6C6C6C',
  height: '1px',
  width: '100%',

  variants: {
    hovered: {
      true: {
        background: '#fff',
        height: '2px',
      },
    },
  },
});