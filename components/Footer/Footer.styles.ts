import Link from 'next/link';
import { styled } from '../../theme';

export const Avatar = styled('div', {
  position: 'absolute',
  // '@bp1': {
  //   position: 'absolute',
  //   bottom: '-10px',
  //   right: '20%',
  // },
});

export const FooterWrapper = styled('footer', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '60px 20px',
  width: '100%',
  alignItems: 'center',
  backgroundColor: '#121212',
  color: '#F1F1F1',
  overflow: 'hidden',

  '@bp1': {
    padding: '60px 100px',
  },

  '&.hideFooter': {
    display: 'none',
  },
});

export const FooterTop = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@bp1': {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: '4.5rem',
  },
});

export const FooterButton = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: '1.5rem',

  '@bp1': {
    flexDirection: 'row',
    marginBottom: 0,
  },
});

export const FooterLogo = styled(Link, {
  display: 'none',
  fontSize: 'clamp(1.5rem, 8vw, 2rem)',
  fontFamily: 'Krylon',
  textDecoration: 'none',
  color: 'inherit',

  '@bp1': {
    display: 'block',
  },
});

export const Border = styled('span', {
  width: '100%',
  height: '1px',
  background: 'white',
  opacity: 0.3,
  marginTop: '-6px',
  marginBottom: '2rem',

  '@bp1': {
    display: 'none',

    '&#desktop-border': {
      display: 'none',
    },
  },

  '&#desktop-border': {
    display: 'none',
  },
});

export const FooterTerms = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& > div:nth-child(2)': {
    display: 'flex',
    gap: '2rem',
    flex: 1,
    marginBottom: '2rem',
    justifyContent: 'space-evenly',

    '@bp1': {
      marginBottom: 0,
      justifyContent: 'unset',
    },

    '& a': {
      fontSize: '0.75rem',
      textDecoration: 'none',
      color: 'inherit',
    },
  },

  '@bp1': {
    flexDirection: 'row',
    flex: 1,
  },
});

export const FooterBottom = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  width: '100%',

  '& > div:nth-child()': {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    columnGap: '2rem',
    '& a': {
      fontSize: '0.75rem',
      textDecoration: 'none',
      color: 'inherit',
    },
  },

  '@bp1': {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderTop: '1px solid #F1F1F1',
    paddingTop: '1.5rem',
  },
});

export const FooterSocials = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'column-reverse',

  '@bp1': {
    flex: 1,
    flexDirection: 'row',
  },

  '& > div:first-child': {
    '@bp1': {
      position: 'absolute',
      left: 0,
    },
  },

  '& > div:last-child': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1rem',
  },
});

export const FooterCopyright = styled('p', {
  flex: 1,
  textAlign: 'center',
  opacity: '0.5',
  fontSize: '0.75rem',

  '&#mobile-copyright': {
    display: 'block',
  },

  '&#desktop-copyright': {
    display: 'none',
  },

  '@bp1': {
    '&#mobile-copyright': {
      display: 'none',
    },

    '&#desktop-copyright': {
      display: 'block',
    },
  },
});
