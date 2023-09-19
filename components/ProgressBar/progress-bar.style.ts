import { styled, theme } from 'theme';

export const FractionWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '5px',
  position: 'relative',
  top: '23%',

  p: {
    lineHeight: '1rem',
    color: theme.colors.tertiary,
  },

  span: {
    content: '',
    display: 'block',
    width: '10px',
    height: '1px',
    backgroundColor: theme.colors.tertiary,
  },
});
