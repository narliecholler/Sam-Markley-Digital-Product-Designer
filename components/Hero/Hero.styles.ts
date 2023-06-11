import { styled, theme } from '@/theme/theme';

const HeroWrapper = styled('section', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  backgroundColor: theme.colors.black,
  minHeight: '90vh',

  '& h1': {
    width: '100%',
    color: theme.colors.white,

    '& br': {
      display: 'none',
    },

    '& span': {
      color: 'inherit',
      font: 'inherit',
      fontWeight: 600,
      backgroundImage:
        'linear-gradient(93.36deg, #95E7A4 -11.48%, #8FD8FA 34.24%, #CBBEFA 74.58%, #FEFEFE 110.21%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '-moz-background-clip': 'text',
      '-moz-text-fill-color': 'transparent',
      backgroundColor: '#CBBEFA', // fallback

      '@bp1': {
        '& br': {
          display: 'block',
        },
      },
    },

    '@bp1': {
      width: '60%',
      '& br': {
        display: 'block',
      },
    },
  },
});

const HeroFooter = styled('div', {
  position: 'relative',
  gap: '2rem',
  display: 'flex',
  flexDirection: 'column',
  color: theme.colors.white,

  '@bp1': {
    flexDirection: 'row',
    '&::before': {
      content: '',
      width: '20%',
      height: '1px',
      background: theme.colors.white,
      marginTop: '12px',
    },

    '&::after': {
      content: '',
      width: '100%',
      height: '1px',
      background: theme.colors.white,
      marginTop: '12px',
    },
  },
});

const DesignerDetails = styled('div', {
  '@bp1': {
    maxWidth: '34%',
    '& p': {
      color: theme.colors.white,
      paddingBottom: '1rem',
    },
  },

  '& button': {
    color: theme.colors.white,
    display: 'none',

    '@bp1': {
      color: theme.colors.white,
      display: 'flex',
    },
  },
});

const MobileContact = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  paddingTop: '1rem',

  '& button': {
    display: 'flex',
  },

  '& span': {
    display: 'block',
    width: '100%',
    height: '1px',
    background: theme.colors.white,
  },

  '@bp1': {
    display: 'none',
  },
});

const ScrollWrapper = styled('div', {
  display: 'none',
  color: theme.colors.white,

  '& p': {
    paddingBottom: 0,
  },

  '@bp1': {
    display: 'flex',
    gap: '1rem',
    position: 'absolute',
    right: 0,
    marginTop: '25px',
  },
});

export {
  HeroWrapper,
  HeroFooter,
  ScrollWrapper,
  DesignerDetails,
  MobileContact,
};
