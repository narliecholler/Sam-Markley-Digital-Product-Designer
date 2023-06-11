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
    fontFamily: 'ABCMonumentGrotesk Regular',
    fontWeight: 400,
    fontSize: '16px',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'ABCWhyteVariable',
  },

  h1: {
    fontSize: 'clamp(2.5rem, 5vw, 76px)',
    lineHeight: 'clamp(2.9rem, 5vw, 80px)',
  },

  h2: {
    fontSize: 'clamp(2.5rem, 5vw, 60px)',
    lineHeight: 'clamp(2.5rem, 5vw, 68px)',
  },

  h3: {
    fontSize: 'clamp(2.2rem, 5vw, 48px)',
  },

  // subtitle 1
  h4: {
    fontSize: 'clamp(2rem, 5vw, 34px)',
  },

  // subtitle 2
  h5: {
    fontSize: 'clamp(1.2rem, 5vw, 24px)',
  },

  p: {
    fontSize: '16px',
    lineHeight: '26px',
  },

  section: {
    padding: '0 20px',

    '@bp2': {
      padding: '0 100px',
    },
  },

  '@font-face': [
    {
      fontFamily: 'ABCWhyteVariable',
      fontDisplay: 'swap',
      fontWeight: '100 1000',
      fontStretch: '25% 151%',
      src: "url(/fonts/ABCWhyteInktrapVariable-Trial.woff2) format('woff2')",
    },
    {
      fontFamily: 'ABCWhyteInktrap Regular',
      fontDisplay: 'swap',
      src: "url(/fonts/ABCWhyteInktrap-Regular-Trial.woff2) format('woff2')",
    },
    {
      fontFamily: 'ABCMonumentGrotesk Regular',
      fontDisplay: 'swap',
      src: "url(/fonts/ABCMonumentGrotesk-Regular-Trial.woff2) format('woff2')",
    },
    {
      fontFamily: 'ABCMonumentGrotesk Medium',
      fontDisplay: 'swap',
      src: "url(/fonts/ABCMonumentGrotesk-Medium-Trial.woff2) format('woff2')",
    },
  ],
});
