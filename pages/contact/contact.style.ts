import { styled, theme } from '@/theme/index';

export const ContactWrapper = styled('div', {
  '@bp1': {
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: theme.colors.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '80px 0',
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
    padding: '80px 120px',
  },
});

export const ContactInformation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h1: {
    lineHeight:
      'clamp(2.5625rem, 1.7589285714285712rem + 3.214285714285715vw, 4.25rem)',
    fontSize:
      'clamp(2rem, 1.1666666666666665rem + 3.333333333333334vw, 3.75rem)',
  },

  '@bp1': {
    width: '50%',
    position: 'relative',
  },

  '& span': {
    backgroundImage: 'linear-gradient(93.36deg, #822DA4 100%, #A2255D 100%)',
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
  display: 'none',
  '@bp1': {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',

    '& p': {
      fontFamily: 'ABCMonumentGrotesk Regular',
      fontSize:
        'clamp(1rem, 0.7619047619047619rem + 0.9523809523809524vw, 1.5rem)',
      lineHeight: '29px',
      borderBottom: `1px solid ${theme.colors.black}`,
      paddingBottom: '8px',
      marginBottom: '32px',
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
      left: '-120px',
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
      fontFamily: 'ABCWhyteInktrap Regular',
      fontSize: '34px',
      paddingBottom: '16px',
    },
  },
});
