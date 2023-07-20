import Link from 'next/link';
import { styled, theme } from '@/theme/index';

const IconWrapper = styled('div', {
  flexShrink: 0,
});

const ButtonWrapper = styled(Link, {
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    color: {
      dark: {
        backgroundColor: theme.colors.buttonDark,

        '& p': {
          color: theme.colors.white,
        },

        '& path': {
          stroke: theme.colors.white,
        },

        '&:hover': {
          '& path': {
            stroke: theme.colors.black,
          },
        },
      },
      light: {
        backgroundColor: theme.colors.white,

        '& p': {
          color: theme.colors.black,
        },

        '& path': {
          stroke: theme.colors.black,
        },
      },
    },
  },

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  gap: '8px',
  height: '3.2rem',
  padding: '12px 32px',
  cursor: 'pointer',
  border: `1px solid ${theme.colors.buttonBorder}`,
  borderRadius: '1.5rem',
  backgroundSize: '400%',
  overflow: 'hidden',
  width: 'fit-content',
  textDecoration: 'none',

  '&::before': {
    content: '',
    height: 'inherit',
    position: 'absolute',
    top: '-1px',
    left: 0,
    transform: 'scaleX(0)',
    transformOrigin: '0 50%',
    width: '100%',
    borderRadius: 'inherit',
    borderColor: 'transparent',
    background:
      'linear-gradient(82.3deg, #95E7A4 -11.48%, #8FD8FA 34.24%, #CBBEFA 74.58%, #FEFEFE 110.21%)',

    transition: 'all 0.475s',
  },

  '& p': {
    padding: 0,
    fontFamily: 'ABCMonumentGrotesk Medium',
    letterSpacing: '0.0125em',
    zIndex: 1,
    position: 'relative',
    color: theme.colors.white,
  },

  '&:hover': {
    '& p': {
      color: theme.colors.black,
    },
  },

  '&:hover::before': {
    transform: 'scaleX(1)',
  },
});

export { IconWrapper, ButtonWrapper };
