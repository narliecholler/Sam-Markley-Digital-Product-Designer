import { styled, theme } from 'theme/theme';

export const ButtonWrapper = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  gap: '8px',
  padding: '12px 32px',
  color: '#fff',
  cursor: 'pointer',
  backgroundColor: theme.colors.buttonDark,
  border: `1px solid ${theme.colors.buttonBorder}`,
  borderRadius: '25px',
  backgroundPosition: '100% 0',
  backgroundSize: '300% 100%',
  backgroundImage:
    'linear-gradient(to left, transparent 50%, #95E7A4 10%, #8FD8FA 35%, #CBBEFA 66%, #FEFEFE 94%)',
  transition: 'all 1s ease-in-out',

  '& p': {
    padding: 0,
    fontFamily: 'ABCMonumentGrotesk Medium',
    letterSpacing: '0.0125em',
  },

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  '&:hover': {
    backgroundPosition: '0 0',
    borderRadius: '25px',
    borderColor: theme.colors.black,
  },
});

export const IconWrapper = styled('div', {
  flexShrink: 0,
});
