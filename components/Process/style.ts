import { styled } from '../../theme';

// export const ProcessSection = styled('section', {
//   '& .wrapper': {
//     width: '100%',
//     zIndex: 20,
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     padding: '5rem 0',
//   },

//   '& .cards': {
//     position: 'relative',
//     height: 'auto',
//     width: '90vw',
//     fontSize: '36px',
//     opacity: 1,

//     '@bp1': {
//       width: '600px',
//     },

//     '&:first-child': {
//       '& > div': {
//         borderRadius: '24px 24px 0px 0px',
//       },
//     },

//     '&:last-child': {
//       '& > div': {
//         borderRadius: '0px 0px 24px 24px',
//       },
//     },
//   },
// });

export const ProcessWrapper = styled('div', {
  backgroundColor: '#fff',
  padding: '23px 15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0.5rem auto',
  position: 'relative',
  textAlign: 'center',

  '@bp1': {
    padding: '23px 50px',
  },

  '& h3': {
    fontFamily: 'ABCWhyteInktrap Regular',
    fontSize: 'clamp(1.5rem, 5vw, 2.125rem)',
  },

  '& p': {
    fontSize: '0.875rem',
    lineHeight: '26px',
    maxWidth: '350px',
    paddingBottom: '1rem',
    display: 'none',
    transition: 'all 2s ease-in-out',

    '@bp1': {
      fontSize: '1rem',
    },
  },
});

export const TextWrapper = styled('p', {
  fontSize: '1rem',
  lineHeight: '26px',
  maxWidth: '350px',
});
