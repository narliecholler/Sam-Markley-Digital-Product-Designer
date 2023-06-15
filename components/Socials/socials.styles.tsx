import { styled, theme } from 'theme';

const EmailContactWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',

  a: {
    textDecoration: 'none',
    color: theme.colors.black,
    fontFamily: 'ABCMonumentGrotesk Regular',
    fontSize:
      'clamp(1rem, 0.7619047619047619rem + 0.9523809523809524vw, 1.5rem)',
    lineHeight: '29px',
    borderBottom: `1px solid ${theme.colors.black}`,
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

export { SocialIconsWrapper, EmailContactWrapper };
