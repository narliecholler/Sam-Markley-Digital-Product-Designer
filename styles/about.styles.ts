import { styled, theme } from 'theme/theme';

export const HeroSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.primary,
  minHeight: '100vh',

  // '@bp1': {
  //   paddingTop: '1rem',
  // },

  '@bp2': {
    height: 'calc(100vh - 80px)',
  },
});

export const HeroHeader = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  flexDirection: 'column-reverse',
  paddingTop: '2rem',

  '@bp1': {
    flexDirection: 'unset',
    width: '100%',
    height: '80%',
  },
});

export const HeroFooter = styled('div', {
  width: '100%',
  height: '120px',
  background:
    'linear-gradient(93.36deg, #95E7A4 -11.48%, #8FD8FA 34.24%, #CBBEFA 74.58%, #FEFEFE 110.21%)',
  borderRadius: '16px',
});

export const LogosWrapper = styled('div', {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '100%',
  width: '100%',
  display: 'flex',
});

export const SplineWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  flex: 1,
});

export const TitleWrapper = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h1: {
    lineHeight:
      'clamp(2.5625rem, 1.7589285714285712rem + 3.214285714285715vw, 4.25rem)',
    fontSize: 'clamp(2rem, 1.1666666666666665rem + 3.333333333333334vw, 5rem)',

    '& span': {
      font: 'inherit',
      backgroundImage: 'linear-gradient(90deg, #822DA4 0%, #A2255D 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '-moz-background-clip': 'text',
      '-moz-text-fill-color': 'transparent',
    },
  },

  p: {
    '@bp1': {
      maxWidth: '65%',
    },
  },
});

export const PillarWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '950px',
  margin: 'auto',
  gap: '1rem',

  h2: {
    fontSize:
      'clamp(1.8rem, 1.1666666666666665rem + 3.333333333333334vw, 3rem)',
    lineHeight: 'normal',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },

  p: {
    textAlign: 'center',
  },
});

export const PillarGrid = styled('div', {
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  gap: '1.5rem',
  marginTop: '2rem',

  p: {
    textAlign: 'left',
  },
});

export const QuoteWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridRowGap: '1rem',
  flexWrap: 'wrap',
  backgroundColor: theme.colors.primary,

  '@bp1': {
    gridColumnGap: '2rem',
  },
});
