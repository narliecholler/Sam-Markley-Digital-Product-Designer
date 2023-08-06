import { styled, theme } from 'theme/theme';

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  marginBottom: '16px',

  '& label': {
    display: 'flex',
    gap: '2px',
    color: theme.colors.black,
    lineHeight: '26px',

    '& span': {
      color: '#D3D3D3',
    },
  },
});

export const InputContainer = styled('div', {
  position: 'relative',
  '& span': {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px',
    boxShadow: '6px 0px 0px -5px #D3D3D3',
  },
  '& input, & textarea': {
    width: '100%',
    paddingLeft: '55px',
    paddingRight: '10px',
    background: '#F9f9f9',
    color: '#1D1D1D',
    fontSize: '16px',
    border: '0.5px solid #595959',
    borderRadius: '4px',
    height: '40px',
  },

  // override default styling for large text area.
  '&#formTextArea': {
    '& textarea': {
      resize: 'none',
      height: 'unset',
      paddingTop: '6px',
    },
    '& span': {
      height: 'auto',
    },
  },
});
