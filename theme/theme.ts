import { createStitches } from '@stitches/react'

export const { css, styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      primary: "#000",
      secondary: "#fff",
    },
    fontSizes: {
      1: "16px",
      2: "18px",
      3: "20px",
    },
  },
  media: {
    bp1: "(min-width: 768px)",
    bp2: "(min-width: 1024px)",
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "ABCMonumentGrotesk Regular",
    fontSize: "16px",
  },

  section: {
    padding: "0 20px",
    minHeight: "calc(100vh - 80px)",

    "@bp1": {
      padding: "0 100px",
    },
  },

  "@font-face": [
    {
      fontFamily: "ABCWhyteInktrap Bold",
      fontDisplay: "swap",
      src: "url(/fonts/ABCWhyteInktrap-Black-Trial.woff2) format('woff2'), url(/fonts/ABCWhyteInktrap-Black-Trial.woff2) format('woff2')",
    },
    {
      fontFamily: "ABCMonumentGrotesk Regular",
      fontDisplay: "swap",
      src: "url(/fonts/ABCMonumentGrotesk-Regular-Trial.woff2) format('woff2'), url(/fonts/ABCMonumentGrotesk-Regular-Trial.woff2) format('woff2')",
    },
    {
      fontFamily: "ABCWhyteInktrap Regular",
      fontDisplay: "swap",
      src: "url(/fonts/ABCWhyteInktrap-Regular-Trial.woff2) format('woff2'), url(/fonts/ABCWhyteInktrap-Regular-Trial.woff2) format('woff2')",
    },
  ],
});