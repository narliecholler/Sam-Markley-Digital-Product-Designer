import { styled, theme } from '@/theme/index';

export const ContactWrapper = styled('div', {
  backgroundColor: theme.colors.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  height: '100%',
  paddingTop: '4rem',

  width: '100vw',
  marginLeft: 'calc((-100vw + 100%) / 2)',
  marginRight: 'calc((-100vw + 100%) / 2)',

  '@bp1': {
    width: 'unset',
    margin: 'unset',
    paddingBottom: '3rem',
  },
});

export const ContactContainer = styled('div', {
  width: '100%',
  maxWidth: '1172px',
  padding: '35px 26px',
  backgroundColor: '#fff',
  display: 'flex',
  gap: '2rem',
  flexDirection: 'column',

  '@bp1': {
    flexDirection: 'row',
    gap: '4rem',
    width: '85%',
    padding: '60px 60px',
    minHeight: '500px',
    borderRadius: '16px',
  },

  '@bp2': {
    width: '70%',
    padding: '80px',
  },
});

export const ContactInformation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1.5rem',

  h1: {
    lineHeight:
      'clamp(2.5625rem, 1.7589285714285712rem + 3.214285714285715vw, 5.25rem)',
    fontSize: 'clamp(2.125, 1.1666666666666665rem + 3.333333333333334vw, 5rem)',
  },

  '@bp1': {
    width: '50%',
    position: 'relative',
  },

  '& span': {
    backgroundImage: 'linear-gradient(90deg, #822DA4 0%, #A2255D 44.88%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-background-clip': 'text',
    '-moz-text-fill-color': 'transparent',
    font: 'inherit',
  },
});

export const ContactForm = styled('div', {
  '@bp1': {
    width: '50%',
  },
});

export const MobileMenuSocials = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '2rem',

  '& > div:first-child': {
    paddingTop: '2rem',
    '@bp1': {
      paddingTop: 0,
    },
  },

  '& > div:last-child': {
    display: 'none',

    '@bp1': {
      display: 'flex',
    },
  },
});

export const DateInformation = styled('div', {
  display: 'none',
  position: 'relative',
  border: '1px solid #F9F9F9',
  borderRadius: '0px 8px 8px 0px',

  '& div:first-child': {
    position: 'relative',
    zIndex: 10,
  },

  // breakout container for background.
  '& div:last-child': {
    border: '1px solid #F9F9F9',
    borderRadius: '0px 8px 8px 0px',
    backgroundColor: '#F9F9F9',
    position: 'absolute',

    height: '100%',
    zIndex: 0,
    top: 0,

    '@bp1': {
      width: 'calc(100% + 60px)',
      left: '-60px',
    },

    '@bp2': {
      width: 'calc(100% + 120px)',
      left: '-80px',
    },
  },

  '@bp1': {
    display: 'block',
    backgroundColor: '#F9F9F9',
    padding: '24px 0',

    '& p': {
      position: 'relative',
    },

    '& p:first-child': {
      fontWeight: 500,
      fontSize: '34px',
      paddingBottom: '16px',
    },
  },
});
