import { styled, theme } from 'theme/theme';

export const WorkingProcesses = styled('section', {
  //   height: '750vh',
  position: 'relative',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  paddingTop: '5rem',
  paddingBottom: '5rem',
  zIndex: 0,
  background: '#F7EEF9',

  //   '@bp1': {
  //     height: '580vh',
  //   },

  h2: {
    lineHeight:
      'clamp(2.5625rem, 1.7589285714285712rem + 3.214285714285715vw, 4.25rem)',
    fontSize:
      'clamp(2rem, 1.1666666666666665rem + 3.333333333333334vw, 3.75rem)',
    marginBottom: '3rem',
    fontFamily: 'ABCWhyteVariable',
  },
});

export const Process = styled('div', {
  position: 'relative',
  height: 'auto',
  width: '90vw',
  fontSize: '36px',
  opacity: 1,

  '&:nth-child(2)': {
    '& > div': {
      borderRadius: '24px 24px 0px 0px',
    },
  },

  '&:last-child': {
    '& > div': {
      borderRadius: '0px 0px 24px 24px',
    },
  },

  '@bp1': {
    width: '600px',
  },
});
