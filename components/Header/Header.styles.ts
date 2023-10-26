import { styled, theme } from '../../theme';

export const HeaderWrapper = styled('header', {
  width: '100%',
  margin: 'auto',
  // margin: '0 5rem',
  maxWidth: '104rem',

  '@bp1': {
    paddingTop: '1rem',
  },

  '& > div': {
    height: '80px',
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    borderBottom: `1px solid ${theme.colors.primary}`,

    '@bp1': {
      borderRadius: '16px',
      padding: '0 40px',
      borderBottom: 'unset',
    },
  },
});

export const LogoWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  flex: 1,
  alignItems: 'center',
  flexShrink: 0,
  zIndex: 20,

  '& a': {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    fontFamily: 'Krylon',
    fontWeight: 700,
    paddingRight: '13px',
    marginRight: '13px',
    borderRight: '1px solid #000000',
  },

  '& > p': {
    fontSize: '12px',

    '@bp1': {
      fontSize: '16px',
    },
  },
});
