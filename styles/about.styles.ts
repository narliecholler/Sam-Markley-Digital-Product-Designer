import { styled, theme } from 'theme/theme';

export const AboutWrapper = styled('div', {});

export const HeroSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   gap: '2rem',
  backgroundColor: theme.colors.black,
  //   paddingTop: '5rem',
  //   paddingBottom: '5rem',

  '@bp2': {
    height: 'calc(100vh - 80px)',
  },
});

export const HeroHeader = styled('div', {
  display: 'flex',
  width: '100%',
  height: '80%',
  color: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
});

export const HeroFooter = styled('div', {
  '& div': {
    display: 'block',
    width: '100%',
    height: '120px',
    background:
      'linear-gradient(93.36deg, #95E7A4 -11.48%, #8FD8FA 34.24%, #CBBEFA 74.58%, #FEFEFE 110.21%)',
    borderRadius: '16px',
  },
});

export const SplineWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '800px',
  flex: 1,
  //   '& canvas': {
  //     width: '85%!important',
  //     height: '85%!important',
  //   },
});

export const TitleWrapper = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h1: {
    lineHeight:
      'clamp(2.5625rem, 1.7589285714285712rem + 3.214285714285715vw, 4.25rem)',
    fontSize:
      'clamp(2rem, 1.1666666666666665rem + 3.333333333333334vw, 3.75rem)',

    '& span': {
      font: 'inherit',
      backgroundImage:
        'linear-gradient(93.36deg, #95E7A4 -11.48%, #8FD8FA 34.24%, #CBBEFA 74.58%, #FEFEFE 110.21%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '-moz-background-clip': 'text',
      '-moz-text-fill-color': 'transparent',
    },
  },

  p: {
    maxWidth: '60%',
  },
});
