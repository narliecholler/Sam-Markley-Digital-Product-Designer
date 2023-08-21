import { styled, theme } from 'theme';

const EmailContactWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',

  variants: {
    color: {
      white: {
        a: {
          color: theme.colors.white,
          borderBottom: `1px solid ${theme.colors.white}`,
        },
      },
      black: {
        a: {
          color: theme.colors.primary,
        },
      },
    },
  },

  '& > div': {
    position: 'relative',
  },

  a: {
    textDecoration: 'none',
    color: theme.colors.primary,
    fontSize:
      'clamp(1rem, 0.7619047619047619rem + 0.9523809523809524vw, 1.5rem)',
    lineHeight: '29px',
    borderBottom: `1px solid ${theme.colors.primary}`,
    paddingBottom: '8px',
    margin: 0,
  },
});

const SocialIconsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '1rem',
});

const ToolTip = styled('span', {
  position: 'absolute',
  top: '-40px',
  left: '-20px',
  fontSize: '14px',
  background: '#ffffff',
  color: '#ffffff',
  padding: '5px 8px',
  borderRadius: '5px',
  boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
  // opacity: 0,
  pointerEvents: 'none',
  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  '&:before': {
    position: 'absolute',
    content: '',
    height: '8px',
    width: '8px',
    background: '#ffffff',
    bottom: '-3px',
    left: '50%',
    transform: 'translate(-50%) rotate(45deg)',
    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  variants: {
    show: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
});

export { SocialIconsWrapper, EmailContactWrapper, ToolTip };
