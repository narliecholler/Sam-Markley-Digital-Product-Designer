import { styled, theme } from 'theme';

export const Section = styled('section', {
  width: '100%',

  variants: {
    backgroundColor: {
      dark: {
        backgroundColor: theme.colors.black,
      },
      light: {
        backgroundColor: theme.colors.white,
      },
    },
  },
});

export const SectionInner = styled('div', {
  maxWidth: '114rem',
  margin: 'auto',
  padding: '1rem 1rem',

  '@bp1': {
    padding: '3rem 5rem',
  },
});
