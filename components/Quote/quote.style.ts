import { styled, theme } from 'theme';

export const QuoteWrapper = styled('div', {
  backgroundColor: theme.colors.white,
  borderRadius: '16px',
  gridColumnStart: 'span 12',
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  gap: '1rem',

  '& span': {
    fontSize: '30px',
  },

  '@bp1': {
    gridColumnStart: 'span 6',
    minHeight: '85vh',
    padding: '40px',
  },
});

export const QuoteHeader = styled('blockquote', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '2.5rem',
  fontFamily: 'Krylon',
  fontSize: 'clamp(1.5rem, 5vw, 3rem)',
  lineHeight: 'normal',
  height: '100%',

  // '& p': {
  //   fontSize: '2px',
  //   lineHeight: '29px',
  // },
});

export const QuoteFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  paddingTop: '2rem',

  '& p': {
    '&:first-child': {
      fontFamily: 'Krylon',
      fontSize: 'clamp(1.2rem, 5vw, 2.125rem)',
      lineHeight: 'normal',
    },
    '&:last-child': {
      fontSize: '24px',
    },
  },
});
