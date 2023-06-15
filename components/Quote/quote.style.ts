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

export const QuoteHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',

  '& p': {
    '&:nth-child(2)': {
      fontFamily: 'ABCWhyteInktrap Regular',
      fontSize: '34px',
      lineHeight: '41px',
    },
    '&:nth-child(3)': {
      fontFamily: 'ABCMonumentGrotesk Regular',
      fontSize: '24px',
      lineHeight: '29px',
    },
  },
});

export const QuoteFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '& p': {
    '&:first-child': {
      fontFamily: 'ABCWhyteInktrap Regular',
      fontSize: '34px',
      lineHieght: '41px',
    },
    '&:last-child': {
      fontFamily: 'ABCMonumentGrotesk Regular',
      fontSize: '24px',
      lineHieght: '29px',
    },
  },
});
