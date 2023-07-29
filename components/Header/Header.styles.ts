import { styled } from '../../theme';

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
  flexWrap: 'wrap',
  flex: 1,
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
