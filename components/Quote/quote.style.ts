import { styled, theme } from 'theme';

export const QuoteWrapper = styled('div', {
  maxWidth: '600px',
  height: '734px',
  backgroundColor: theme.colors.white,
  borderRadius: '16px',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1rem',

  '& span': {
    fontSize: '30px',
  },
});

export const QuoteHeader = styled('blockquote', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  fontFamily: 'ABCWhyteVariable',
  fontSize: '34px',
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
      fontSize: '34px',
      lineHeight: '41px',
    },
    '&:last-child': {
      fontFamily: 'ABCMonumentGroteskLight',
      fontSize: '24px',
      lineHeight: '29px',
    },
  },
});
