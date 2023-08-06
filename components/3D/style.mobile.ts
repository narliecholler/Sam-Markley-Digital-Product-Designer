import { styled, keyframes } from '../../theme';

const pulse = keyframes({
  '0%': {
    boxShadow: '0px 0px 0px 0px rgba(216,32,43,0.4)',
  },
  '70%': {
    boxShadow: '0px 0px 0px 15px rgba(216,32,43, 0)',
  },
  '100%': {
    boxShadow: '0px 0px 0px 0px rgba(216,32,43, 0)',
  },
});

export const SectionWrapper = styled('section', {
  position: 'relative',
  padding: 0,
  zIndex: 0,

  '& .c-hotspot-image__hotspots': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
  },

  '& .c-hotspot': {
    pointerEvents: 'initial',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
  },
});

export const HotSpot = styled('div', {
  '&.is-active': {
    '& .c-hotspot__text': {
      display: 'block',
    },
    '& .line': {
      display: 'block',
      transition: 'all 3s ease-in-out',
    },
  },

  '& .line': {
    zIndex: -10,
    display: 'none',
    width: '1px',
    height: '250px',
    background: 'black',
    position: 'relative',
    left: '-35px',
    top: '-141px',
    transform: 'scale(0.6) rotate(-55deg)',
    transition: 'all 2s ease-in-out',
  },

  '&.c-hotspot-image__hotspots': {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
  },

  '& .c-hotspot': {
    pointerEvents: 'initial',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
  },

  '& .c-hotspot__circle': {
    display: 'inline-block',
    margin: '0 auto',
    width: '50px',
    height: '50px',
    position: 'relative',

    '& .c-hotspot__circle-inner': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '2px solid #d8202b',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: ' 100px',
      boxShadow: '0 0 0 100px rgba(purple, 0.4)',
      transition: 'all 0.3s ease-in-out',
      animation: `${pulse} 1.4s infinite`,

      '&:hover': {
        animation: 'none',
      },
    },
  },

  '& .c-hotspot__text': {
    pointerEvents: 'none',
    display: 'none',
    position: 'absolute',
    width: '350px',
    height: 'auto',
    top: '-180px',
    left: '-450px',
    fontSize: '1rem',

    '@bp1': {
      pointerEvents: 'none',
      display: 'none',
      position: 'absolute',
      width: '350px',
      height: 'auto',
      top: '380px',
      left: '-70px',
      fontSize: '1rem',
    },

    '& article': {
      '& h4': {
        fontFamily: 'IBMPlexMonoSemiBold',
        fontSize: '2rem',
        paddingBottom: '1rem',
      },
      '& p': {
        fontSize: '1rem',
        opacity: 0.8,
      },
    },
  },
});
