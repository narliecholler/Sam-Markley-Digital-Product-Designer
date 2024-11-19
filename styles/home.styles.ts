import { styled } from 'styled-components';
import { theme } from '@/lib/theme/theme';

// eslint-disable-next-line import/prefer-default-export
export const WorkingProcesses = styled.section`
  height: '500vh';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  z-index: 0;
  background: '#F7EEF9';

  '& #workingProcessesContainer': {
    display: 'flex';
    align-items: 'center';
    justify-content: 'flex-start';
    flex-direction: 'column';
    position: 'sticky';
    padding: 0;
    top: '40%';
    // overflow: 'hidden';
    height: '100vh';
    width: '100%';

    h2: {
      line-height: 'clamp(2.5625rem 1.7589285714285712rem + 3.214285714285715vw, 4.25rem)';
      font-size: 'clamp(2rem, 1.1666666666666665rem + 3.333333333333334vw, 3.75rem)';
    }
  }
`;

export const Box = styled.div`
  background-color: ${theme.colors.white};
  border-radius: '24px';
  maxheight: '775px';
  padding: '1rem';
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'space-between';
  gap: '2rem';
  grid-column-start: 'span 12';

  p: {
    font-size: '24px';
  }

  span: {
    flex: 1;
    border-left: 1px solid ${theme.colors.primary};
  }

  /* '@bp1': {
    padding: '40px';
  }; */

  /* variants: {
    columns: {
      5: {
        '@bp1': {
          grid-column-start: 'span 5';
        };
      };
      7: {
        '@bp1': {
          grid-column-start: 'span 7';
        };
      };
    };
    background: {
      light: {
        background-color: theme.colors.white;
      };
      dark: {
        background-color: theme.colors.secondary;
      };
    };
  }; */
`;

/**
 * Designing for People styles.
 */
export const DesigningSection = styled.div`
  display: 'grid';
  grid-template-rows: 'auto';
  grid-template-columns: 'repeat(12, 1fr)';
  min-height: '85vh';

  /* '@bp1': {
    gap: '2rem';
  }; */

  h2: {
    font-size: 'clamp(3rem, 5vw, 5rem)';
  }
`;

// belongs in the above.
/* [`& ${Box}`]: {
    '&:first-child': {
      order: 1;
    };

    '@bp1': {
      '&:last-child': {
        order: 1;
      };
    };
  }; */

/* '& #design-creative': {
    height: '400px';
    position: 'relative';
    top: '-3rem';

    '@bp1': {
      top: 'unset';
      height: 'unset';
    };
  };

  '& #custom-video': {
    marginLeft: 'calc(-50vw + 50%)';
    margin-right: 'calc(-50vw + 50%)';

    '@bp1': {
      margin-right: 'unset';
      marginLeft: 'unset';
    };

    '& .video': {
      height: '441px';

      '@bp1': {
        height: '100%';
      };
    };

    '& > div': {
      width: '100%';
      height: '100%';

      iframe: {
        width: '100%';
        height: '100%';
      };
    };
  }; */

/**
 * Hero styles
 */
export const HeroWrapper = styled.div`
  position: 'relative';
  display: 'flex';

  flex-direction: 'column';
  background-color: ${theme.colors.primary};
  width: '100%';
  color: ${theme.colors.white};
  min-height: 'calc(100vh - 80px)';

  '@bp1': {
    padding-top: '5rem';
    min-height: '100vh';
    justify-content: 'space-between';
    padding-bottom: '5rem';
  };

  '& h1; & h2': {
    background-image:
      'linear-gradient(137deg; #95E7A4 0%; #8FD8FA 35.42%; #CBBEFA 66.67%; #FEFEFE 94.27%)';
    '-webkit-background-clip': 'text';
    '-webkit-text-fill-color': 'transparent';
    '-moz-background-clip': 'text';
    '-moz-text-fill-color': 'transparent';
  };

  '& h2': {
    font-size: 'clamp(40px; 5vw; 48px)';
    line-height: '3.5rem';
    max-width: '350px';

    '@bp1': {
      position: 'absolute';
      right: '0%';
      bottom: '31%';
      max-width: 'unset';
    };
  };

  '& h1': {
    font-size: 'clamp(70px; 5vw; 80px)';
    line-height: '4.5rem';
    margin-bottom: '1rem';
    max-width: '300px';

    '@bp1': {
      position: 'absolute';
      top: '12%';
      margin-bottom: 0;
      max-width: 'unset';
    };

    '& p': {
      font-size: '30px';
      line-height: 'clamp(2.5rem; 6vw; 80px)';
      margin: 0;
      position: 'relative';
      overflow: 'hidden';

      '&:first-child': {
        font-weight: 700;
      };

      '@bp1': {
        font-size: 'clamp(2.5rem; 5vw; 76px)';
      };
    };
  };
`;

export const HeroPattern = styled.div`
  '& svg': {
    width: '100%';
  }
`;

export const HeroFooterWrapper = styled.div`
  position: 'relative';
  width: '100%';

  '@bp1': {
    height: '60vh';
  }

  svg: {
    display: 'block';
    width: '100%';
    height: '100%';
  }

  '& #video-wrapper': {
    display: 'block';
    position: 'absolute';
    top: '-2rem';
    left: '1.5rem';
    webkit-clip-path: 'url(#hero-clip-path)';
    clip-path: 'url(#hero-clip-path)';
    width: '100%';
    height: '100%';
    background-color: ${theme.colors.tertiary};

    '@bp1': {
      top: 0;
      left: 0;
    }

    '& #video-inner-wrapper': {
      position: 'absolute';
      width: '50%';
      height: '100%';
      left: '50%';
      transform: 'translate(-50%; 0)';
    }

    video: {
      width: '100%';
      height: '100%';
      transform: 'scale(2.5)';

      // '@bp1': {
      //   max-width: '1664px';
      //   width: 'unset';
      // };
    }
  }
`;

export const Footer = styled.div`
  display: 'flex';
  justify-content: 'center';
  flex-direction: 'column';
  gap: '2rem';

  '@bp1': {
    flex-direction: 'row';
    '&::before': {
      content: '';
      width: '20%';
      height: '1px';
      background: ${theme.colors.white};
      margin-top: '12px';
    }

    '&::after': {
      content: '';
      width: '100%';
      height: '1px';
      background: ${theme.colors.white};
      margin-top: '12px';
    }
  }
`;

export const DesignerDetails = styled.div`
  display: 'flex';
  flex-direction: 'column';
  gap: '1rem';

  '& > div': {
    display: 'flex';
    align-items: 'center';
    gap: '1rem';

    '& span': {
      display: 'block';
      width: '100%';
      height: '1px';
      background: ${theme.colors.white};

      '@bp1': {
        display: 'none';
      }
    }
  }

  '@bp1': {
    max-width: '34%';
    '& p': {
      color: ${theme.colors.white};
    }
  }

  '& button': {
    color: ${theme.colors.white};
    display: 'none';

    '@bp1': {
      color: ${theme.colors.white};
      display: 'flex';
    }
  }
`;

export const MobileContact = styled.div`
  display: 'flex';
  align-items: 'center';
  gap: '1rem';
  padding-top: '1rem';

  '& button': {
    display: 'flex';
  }

  '& span': {
    display: 'block';
    width: '100%';
    height: '1px';
    background: ${theme.colors.white};
  }

  '@bp1': {
    display: 'none';
  }
`;

export const ScrollWrapper = styled.div`
  display: 'none';
  color: ${theme.colors.white};

  '& p': {
    padding-bottom: 0;
  }

  '@bp1': {
    display: 'flex';
    gap: '1rem';
    position: 'absolute';
    right: 0;
    margin-top: '25px';
  }
`;

/**
 * Case Study styles
 */
export const ProjectsHeading = styled.h2`
  font-weight: 400;
  color: '#fff';
  font-size: '24px';
  padding-bottom: '1rem';
  font-family: 'var(--font-ibm-plex-sans)';
  border-bottom: '1px solid #fff';
`;
