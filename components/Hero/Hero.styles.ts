import { styled, theme } from '@/theme/theme';

const HeroWrapper = styled('section', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  backgroundColor: theme.colors.black,
  minHeight: '90vh',
  width: '100%',
  color: theme.colors.white,

  '& h1': {
    position: 'relative',
    fontWeight: 400,
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',

    '&.current': {
      opacity: 1,
    },

    '& p': {
      fontSize: '30px',
      lineHeight: 'clamp(2.5rem, 6vw, 80px)',
      margin: 0,
      position: 'relative',
      overflow: 'hidden',

      '&:first-child': {
        fontWeight: 700,
      },

      '@bp1': {
        fontSize: 'clamp(2.5rem, 5vw, 76px)',
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
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    '& span': {
      display: 'block',
      width: '100%',
      height: '1px',
      background: theme.colors.white,

      '@bp1': {
        display: 'none',
      },
    },
  },

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
