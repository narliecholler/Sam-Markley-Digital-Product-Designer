import { styled, theme } from '../../theme';

export const HeaderWrapper = styled('header', {
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  height: '80px',
  color: 'black',
  display: 'flex',
  padding: '0 20px',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid black',
  backgroundColor: '#F9F9F9',
  zIndex: 10,

  // when intersecting observer, for sticky shadow.
  '&.active': {
    boxShadow: 'hsla(0 0% 0% / 0.3) 0 0.5rem 1rem',
    transitionDuration: '400ms',
  },

  '@bp1': {
    justifyContent: 'space-between',
  },

  '@bp2': {
    padding: '0 100px',
  },
});

export const LogoWrapper = styled('div', {
  fontSize: '1rem',
  lineHeight: '26px',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  zIndex: 20,

  '& a': {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    fontFamily: 'ABCWhyteVariable',
    fontWeight: 600,
    paddingRight: '13px',
    marginRight: '13px',
    borderRight: '1px solid #000000',
  },
});

export const NavWrapperDesktop = styled('nav', {
  width: '100%',
  alignItems: 'center',
  display: 'none',

  '& ul': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    width: '100%',
    listStyle: 'none',
    gap: '1rem',

    '& .active:after': {
      content: '',
      display: 'block',
      position: 'absolute',
      bottom: '20%',
      width: '6px',
      height: '6px',
      background: theme.colors.black,
      borderRadius: '100%',
    },

    '& a': {
      fontFamily: 'ABCMonumentGrotesk Medium',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
    },
  },

  '@bp1': {
    display: 'flex',
    '& p': {
      display: 'none',
    },
    '& ul': {
      justifyContent: 'flex-end',
      gap: '2rem',
      '& a': {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 700,
      },
    },
  },
});

export const NavWrapperMobile = styled('div', {
  '@bp1': {
    display: 'none',
  },

  '& input': {
    position: 'absolute',
    top: 0,
    right: 0,
    visibility: 'hidden',
  },

  '& input + label': {
    position: 'relative',
    display: 'block',
    height: '20px',
    width: '15px',
    zIndex: 5,

    '& span': {
      position: 'absolute',
      width: '100%',
      height: '2px',
      top: '50%',
      marginTop: '-1px',
      left: '0',
      display: 'block',
      background: 'black',
      transition: '.5s',
    },
    '& span:first-child': {
      top: '3px;',
    },
    '& span:last-child': {
      top: '16px',
    },
  },

  '& label': {
    '&:hover': {
      cursor: 'pointer',
    },
  },

  '& input:checked + label': {
    '& span': {
      opacity: 0,
      top: '50%',
    },
    '& span:first-child': {
      opacity: 1,
      transform: 'rotate(405deg)',
    },
    '& span:last-child': {
      opacity: 1,
      transform: 'rotate(-405deg)',
    },
  },

  '& input:checked ~ nav': {
    height: 'calc(100vh - 80px)',
    transitionDelay: '0s',
    position: 'fixed',
    top: '80px',
    left: '0',
    width: '100%',
    display: 'block',
    zIndex: '-10',

    '& ul': {
      display: 'block',
      height: '100%',

      '& li': {
        opacity: 1,
        transitionDelay: '.5s',
      },
    },
  },

  '& input ~ nav': {
    backgroundColor: '#F9F9F9',
    zIndex: 3,
    transition: '.5s',
    transitionDelay: '.5s',
    overflow: 'hidden',

    '& ul': {
      display: 'none',
      listStyle: 'none',
      padding: '30px',
      paddingTop: 0,

      '& li': {
        opacity: 0,
        transition: '.5s',
        transitionDelay: '0s',
        borderBottom: `1px solid ${theme.colors.black}`,
        padding: '40px 0 16px 0',

        '& div': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },

        '& p': {
          color: '#595959',
        },

        '& a': {
          fontFamily: 'ABCWhyteVariable',
          fontWeight: 500,
          fontSize: '34px',
          textDecoration: 'none',
          color: '$blackColor',
          display: 'block',
        },
      },
    },
  },
});

export const MobileMenuSocials = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  paddingTop: '74px',

  '& p': {
    fontFamily: 'ABCMonumentGrotesk Medium',
    borderBottom: `1px solid ${theme.colors.black}`,
    paddingBottom: '8px',
    marginBottom: '32px',
  },
});

export const Hamburger = styled('div', {
  display: 'block',
  position: 'absolute',
  top: 0,
  right: 0,
  background: 'black',
  height: '70px',
  width: '70px',

  '@bp1': {
    display: 'none',
  },

  '& a': {
    position: 'absolute',
    left: '18px',
    top: '22px',
    cursor: 'pointer',
    padding: '10px 35px 16px 0px',

    '& span, & span::before, & span::after': {
      cursor: 'pointer',
      borderRadius: '1px',
      height: '5px',
      width: '35px',
      background: 'black',
      position: 'absolute',
      display: 'block',
      content: '',
      transition: ' all 300ms ease-in-out',
    },

    '& span::before': {
      top: '-10px',
    },

    '& span:after': {
      bottom: '-10px',
    },

    '&.active': {
      '& span': {
        backgroundColor: 'transparent',
        '&::before, &::after': {
          top: 0,
        },
        '&::before': {
          transform: 'rotate(45deg)',
        },
        '&::after': {
          transform: 'rotate(-45deg)',
        },
      },
    },
  },
});
