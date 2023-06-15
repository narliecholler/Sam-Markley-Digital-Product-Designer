import { styled, theme } from 'theme/theme';

// eslint-disable-next-line import/prefer-default-export
export const WorkingProcesses = styled('section', {
  height: '700vh',
  position: 'relative',
  padding: 0,

  paddingTop: '5rem',
  paddingBottom: '5rem',
  zIndex: 0,
  background: '#F7EEF9',

  '& #workingProcessesContainer': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    h2: {
      lineHeight:
        'clamp(2.5625rem, 1.7589285714285712rem + 3.214285714285715vw, 4.25rem)',
      fontSize:
        'clamp(2rem, 1.1666666666666665rem + 3.333333333333334vw, 3.75rem)',
      fontFamily: 'ABCWhyteVariable',
    },
  },
});
