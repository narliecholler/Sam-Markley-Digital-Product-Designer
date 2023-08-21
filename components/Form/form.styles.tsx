import { styled, theme } from 'theme/theme';

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  marginBottom: '16px',
});

export const LabelWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& label': {
    display: 'flex',
    color: theme.colors.primary,
    // lineHeight: '26px',

    '& span': {
      font: 'inherit',
      color: '#D3D3D3',
    },
  },

  '& span': {
    fontSize: '12px',
    color: theme.colors.error,
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

    '&#validateIcon': {
      top: 0,
      right: 0,
      boxShadow: 'none',
    },
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

    '&.error': {
      borderColor: theme.colors.error,
      borderWidth: '1px',
    },

    '&.valid': {
      borderColor: theme.colors.success,
      borderWidth: '1px',
    },
  },

  // override default styling for large text area.
  '&.formTextArea': {
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
