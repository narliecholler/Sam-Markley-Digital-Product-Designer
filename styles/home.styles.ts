import { styled, theme } from 'theme/theme';

// eslint-disable-next-line import/prefer-default-export
export const WorkingProcesses = styled('section', {
  height: '600vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 0,
  background: '#F7EEF9',

  '& #workingProcessesContainer': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'sticky',
    padding: 0,
    top: '40%',
    // overflow: 'hidden',
    height: '100vh',
    width: '100%',

    h2: {
      lineHeight:
        'clamp(2.5625rem, 1.7589285714285712rem + 3.214285714285715vw, 4.25rem)',
      fontSize:
        'clamp(2rem, 1.1666666666666665rem + 3.333333333333334vw, 3.75rem)',
    },
  },
});

/**
 * Designing for People styles.
 */
export const DesigningSection = styled('div', {
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateColumns: 'repeat(12, 1fr)',
  minHeight: '85vh',
  gap: '2rem',
});

export const Box = styled('div', {
  backgroundColor: theme.colors.white,
  borderRadius: '24px',
  maxHeight: '775px',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2rem',
  gridColumnStart: 'span 12',

  p: {
    fontSize: '24px',
  },

  span: {
    flex: 1,
    borderLeft: `1px solid ${theme.colors.black}`,
  },

  '@bp1': {
    padding: '40px',
  },

  variants: {
    columns: {
      5: {
        '@bp1': {
          gridColumnStart: 'span 5',
        },
      },
      7: {
        '@bp1': {
          gridColumnStart: 'span 7',
        },
      },
    },
    background: {
      light: {
        backgroundColor: theme.colors.white,
      },
      dark: {
        backgroundColor: theme.colors.buttonDark,
      },
    },
  },
});

/**
 * Hero styles
 */

export const HeroWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  backgroundColor: theme.colors.black,
  width: '100%',
  color: theme.colors.white,
  minHeight: 'calc(100vh - 80px)',
  paddingBottom: '3rem',

  '@bp1': {
    paddingTop: '9rem',
    minHeight: '100vh',
  },

  '& h1': {
    fontSize: 'clamp(80px, 5vw, 90px)',
    position: 'absolute',
    top: '19%',

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

export const HeroPattern = styled('div', {
  '& svg': {
    width: '100%',
  },
});

export const HeroFooterWrapper = styled('div', {
  position: 'relative',
});

export const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2rem',

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

export const DesignerDetails = styled('div', {
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

export const MobileContact = styled('div', {
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

export const ScrollWrapper = styled('div', {
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

/**
 * Case Study styles
 */
export const ProjectsHeading = styled('h2', {
  fontWeight: 400,
  color: '#fff',
  fontSize: '24px',
  paddingBottom: '1rem',
  fontFamily: 'var(--font-ibm-plex-mono)',
});
