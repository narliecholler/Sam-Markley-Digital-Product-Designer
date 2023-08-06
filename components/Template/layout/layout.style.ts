import { styled, theme } from 'theme';

export const Container = styled('div', {
  backgroundColor: theme.colors.black,
});

/**
 * similar to section but sits as floating.
 */
export const HeaderWrapper = styled('div', {
  width: '100%',
  zIndex: 99,

  '@bp1': {
    height: '100px',
    position: 'fixed',
    padding: '0 5rem',
  },
});
