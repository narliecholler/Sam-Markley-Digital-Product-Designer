import { styled, theme } from 'theme/theme';

export const PortfolioWrapper = styled('div', {
  //   minHeight: '100vh',
});

export const Hero = styled('div', {
  minHeight: 'calc(100vh - 80px)', // minus the header for mobile.
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  h1: {
    textAlign: 'center',
    fontSize: 'clamp(2.5rem, 5vw, 4.75rem)',
    lineHeight: 'normal',
    marginBottom: '1.5rem',
    backgroundImage: 'linear-gradient(90deg, #822DA4 0%, #A2255D 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
  },
  borderBottom: '1px solid red',

  p: {
    color: theme.colors.white,
  },

  '@bp1': {
    minHeight: '100vh',
  },
});

export const Subtitle = styled('p', {
  fontSize: 'clamp(1rem, 5vw, 1.5rem)',
  maxWidth: '480px',
  margin: 'auto',
  textAlign: 'center',
});

export const ScrollText = styled('p', {
  fontWeight: 700,
  maxWidth: '300px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',

  '&:after': {
    content: '',
    display: 'block',
    width: '1px',
    height: '74px',
    backgroundColor: theme.colors.white,
  },
});
