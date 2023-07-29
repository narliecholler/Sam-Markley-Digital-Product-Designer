import { styled, theme } from 'theme';

export const DesktopMenuWrapper = styled('nav', {
  width: 'auto',
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

export const MobileMenuWrapper = styled('div', {
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: '-10',

    // social section.
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1rem',
      paddingLeft: '30px',
      paddingRight: '30px',
      paddingBottom: '40px',
    },

    '& ul': {
      display: 'block',
      padding: '40px 30px',

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

    // social section.
    '& > div': {
      display: 'none',
    },

    '& ul': {
      display: 'none',
      listStyle: 'none',

      '& li': {
        opacity: 0,
        transition: '.5s',
        transitionDelay: '0s',
        borderBottom: `1px solid ${theme.colors.black}`,

        '&:first-child': {
          a: {
            paddingTop: 0,
          },
        },

        '& a': {
          fontFamily: 'ABCWhyteVariable',
          fontWeight: 500,
          fontSize: '34px',
          textDecoration: 'none',
          color: '$blackColor',
          display: 'block',
          padding: '16px 0',

          '& div': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            '& p': {
              font: 'inherit',
              color: theme.colors.black,
            },
          },

          '& p': {
            color: '#595959',
            fontFamily: 'ABCMonumentGrotesk Regular',
          },
        },
      },
    },
  },
});

export default { DesktopMenuWrapper };
