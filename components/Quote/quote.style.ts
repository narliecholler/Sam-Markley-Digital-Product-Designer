import { styled, theme } from 'theme';

export const QuoteWrapper = styled('div', {
  maxWidth: '600px',
  minHeight: '734px',
  backgroundColor: theme.colors.white,
  borderRadius: '16px',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '& span': {
    fontSize: '30px',
  },
});

export const QuoteHeader = styled('blockquote', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '2.5rem',
  fontFamily: 'ABCWhyteVariable',
  fontSize: 'clamp(1.5rem, 5vw, 2rem)',
  lineHeight: '41px',
  height: '100%',

  '& p': {
    fontFamily: 'ABCMonumentGroteskLight',
    fontSize: '24px',
    lineHeight: '29px',
  },
});

export const QuoteFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  '& p': {
    '&:first-child': {
      fontFamily: 'ABCWhyteVariable',
      fontSize: 'clamp(1.5rem, 5vw, 2rem)',
      lineHeight: '41px',
    },
    '&:last-child': {
      fontFamily: 'ABCMonumentGroteskLight',
      fontSize: '24px',
      lineHeight: '29px',
    },
  },
});
