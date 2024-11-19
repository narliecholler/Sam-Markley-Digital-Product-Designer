import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#121212',
    secondary: '#1D1D1D',
    tertiary: '#F9F9F9',
    white: '#F1F1F1',
    pink: '#F7EEF9',
    buttonBorder: '#E0E0E0',
    error: '#FE1818',
    success: '#0AA307',
  },
};

// export const theme = {
//   colors: {
//     primary: '#121212',

//   },
//   font-sizes: {
//     1: '16px',
//     2: '18px',
//     3: '20px',
//   },
//   media: {
//     bp1: '(min-width: 768px)',
//     bp2: '(min-width: 1024px)',
//   },
// }

// export const { css, styled, globalCss, getCssText, keyframes } = createStitches(
//   {
//     theme: {
//       colors: {
//         primary: '#121212',
//         secondary: '#1D1D1D',
//         tertiary: '#F9F9F9',
//         white: '#F1F1F1',
//         pink: '#F7EEF9',
//         buttonBorder: '#E0E0E0',
//         error: '#FE1818',
//         success: '#0AA307',
//       },
//       font-sizes: {
//         1: '16px',
//         2: '18px',
//         3: '20px',
//       },
//     },
//     media: {
//       bp1: '(min-width: 768px)',
//       bp2: '(min-width: 1024px)',
//     },
//   },
// );

// export const globalStyles = globalCss({
//   '*': {
//     margin: 0,
//     padding: 0,
//     boxSizing: 'border-box',
//   },

//   html: {
//     overflowX: 'hidden',
//     // mobile menu
//     '&.menu-active': {
//       overflow: 'hidden',
//     },
//   },

//   body: {
//     overflowX: 'hidden',
//     font-family: 'IBMPlexMonoRegular',
//     font-size: '16px',
//   },

//   'h1, h2, h3, h4, h5, h6': {
//     font-family: 'Krylon',
//     font-weight: 'normal',
//   },

//   h1: {
//     font-size: 'clamp(2.5rem, 5vw, 76px)',
//     line-height: 'clamp(2.9rem, 5vw, 80px)',
//   },

//   h2: {
//     font-size: '80px',
//   },

//   h3: {
//     font-size: 'clamp(2.2rem, 5vw, 48px)',
//   },

//   h4: {
//     font-size: 'clamp(2rem, 5vw, 34px)',
//   },

//   h5: {
//     font-size: 'clamp(1.2rem, 5vw, 24px)',
//   },

//   '& p, & label, & a, & span': {
//     font-family: 'var(--font-ibm-plex-sans)',
//     font-size: '1rem',
//   },

//   '@font-face': [
//     {
//       font-family: 'Krylon',
//       src: "url(/fonts/Krylon-Regular.woff2) format('woff2')",
//     },
//   ],
// });
