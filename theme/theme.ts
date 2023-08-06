import { createStitches } from '@stitches/react';

export const { css, styled, globalCss, getCssText, keyframes, theme } =
  createStitches({
    theme: {
      colors: {
        primary: '#000',
        white: '#F1F1F1',
        secondary: '#F9F9F9',
        pink: '#F7EEF9',
        black: '#121212',
        buttonDark: '#1D1D1D',
        buttonBorder: '#E0E0E0',
      },
      fontSizes: {
        1: '16px',
        2: '18px',
        3: '20px',
      },
    },
    media: {
      bp1: '(min-width: 768px)',
      bp2: '(min-width: 1024px)',
    },
  });

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: 'IBMPlexMonoRegular',
    fontSize: '16px',

    // mobile menu
    '&.menu-active': {
      overflow: 'hidden',
    },
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Krylon',
  },

  h1: {
    fontSize: 'clamp(2.5rem, 5vw, 76px)',
    lineHeight: 'clamp(2.9rem, 5vw, 80px)',
  },

  h2: {
    fontSize: '80px',
  },

  h3: {
    fontSize: 'clamp(2.2rem, 5vw, 48px)',
  },

  h4: {
    fontSize: 'clamp(2rem, 5vw, 34px)',
  },

  h5: {
    fontSize: 'clamp(1.2rem, 5vw, 24px)',
  },

  '& p, & label, & a': {
    fontFamily: 'var(--font-ibm-plex-mono)',
    fontSize: '1rem',
  },

  '@font-face': [
    {
      fontFamily: 'Krylon',
      src: "url(/fonts/Krylon-Regular.woff2) format('woff2')",
    },
  ],
});
