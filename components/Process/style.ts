import { styled } from '../../theme';

export const ProcessSection = styled('section', {
  height: '750vh',
  position: 'relative',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  gap: '5rem',
  paddingTop: '5rem',
  zIndex: 0,
  background: '#F7EEF9',

  '@bp1': {
    height: '580vh',
  },

  '& .processHeading': {
    position: 'sticky',
    top: '15%',

    '@bp1': {
      top: '12%',
    },
  },

  '& .wrapper': {
    width: '100%',
    zIndex: 20,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '2rem 0',
    paddingBottom: '150px',
    margin: '0',
  },

  '& .cards': {
    position: 'relative',
    height: 'auto',
    top: '7rem',
    minHeight: '200px',
    width: '90vw',
    marginBottom: '50px',
    fontSize: '36px',
    opacity: 1,

    '@bp1': {
      width: '600px',
    },

    '&:first-child': {
      '& > div': {
        borderRadius: '24px 24px 0px 0px',
      },
    },

    '&:last-child': {
      '& > div': {
        borderRadius: '0px 0px 24px 24px',
      },
    },
  },
});

// export const BackgroundContainer = styled("div", {
//   position: "sticky",
//   height: "100vh",
//   top: 0,
//   width: "100%",
//   zIndex: -10,
//   background: "#F7EEF9",
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
    paddingBottom: '1rem',
  },

  '& p': {
    fontSize: '0.875rem',
    lineHeight: '26px',
    maxWidth: '350px',

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
