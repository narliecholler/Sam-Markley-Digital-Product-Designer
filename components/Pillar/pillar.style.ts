import { styled } from 'theme';

const PillarWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '352px',
  height: '320px',
  padding: '46px 32px',
  borderRadius: '8px',

  h3: {
    fontSize: '32px',
    lineHeight: '41px',
  },
  p: {
    fontsize: '24px',
    lineHeight: '29px',
    color: '#5B5765',
  },
});

export default PillarWrapper;
