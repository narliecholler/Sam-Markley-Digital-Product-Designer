import { styled, keyframes } from 'styled-components';

const pulseFrame = keyframes({
  '0%': {
    boxShadow: '0px 0px 0px 0px rgba(216;32;43;0.4)',
  },
  '70%': {
    boxShadow: '0px 0px 0px 15px rgba(216;32;43; 0)',
  },
  '100%': {
    boxShadow: '0px 0px 0px 0px rgba(216;32;43; 0)',
  },
});

const HotSpotInner = styled.div`
  pointer-events: 'initial';
  position: 'absolute';
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
  top: '50%';
  left: '50%';
`;

const HotSpotCircle = styled.span`
  display: 'inline-block';
  position: 'relative';
  margin: '0 auto';
  width: '50px';
  height: '50px';

  '& i': {
    position: 'absolute';
    top: 0;
    left: 0;
    width: '100%';
    height: '100%';
    border: '2px solid #d8202b';
    text-align: 'center';
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    border-radius: ' 100px';
    box-shadow: '0 0 0 100px rgba(purple; 0.4)';
    transition: 'all 0.3s ease-in-out';
    animation: ${pulseFrame} 1.4s infinite;

    '&:hover': {
      animation: 'none';
      cursor: 'pointer';
    }
  }

  '& span': {
    z-index: -10;
    display: 'none';
    width: '1px';
    height: '250px';
    background: 'black';
    position: 'relative';
    left: '-35px';
    top: '-141px';
    transform: 'scale(0.6) rotate(-55deg)';
    transition: 'all 2s ease-in-out';
  }
`;

const HotSpotTextWrapper = styled.div`
  pointer-events: 'none';
  display: 'none';
  position: 'absolute';
  width: '350px';
  height: 'auto';
  bottom: 0;
  // top: "380px";
  // left: "-70px";
  font-size: '1rem';

  /* '@bp1': {
    pointer-events: 'none';
    display: 'none';
    position: 'absolute';
    width: '350px';
    height: 'auto';
    top: '-180px';
    left: '-450px';
    font-size: '1rem';
  }; */

  '& article': {
    '& h4': {
      font-family: 'IBMPlexMonoSemiBold';
      font-size: '2rem';
      padding-bottom: '1rem';
    }
    '& p': {
      font-size: '1rem';
      opacity: 0.8;
    }
  }
`;

const HotSpotWrapper = styled.div`
  position: 'absolute';
  top: 0;
  left: 0;
  width: '100%';
  height: '100%';
  z-index: 3;
`;

export { HotSpotWrapper, HotSpotCircle, HotSpotTextWrapper };

// belongs in hotspotwrapper
/* '&.is-active': { */
/* [`& ${HotSpotTextWrapper}`]: {
      display: 'block';
    };

    [`& ${HotSpotCircle}`]: {
      '& span': {
        display: 'block';
        transition: 'all 3s ease-in-out';
      };
    }; */
/* }; */
