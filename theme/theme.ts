import { createStitches } from '@stitches/react'

export const { css, styled, globalCss, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      primary: "#000",
      secondary: "#fff",
      primaryGradient:
        "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(116.82deg, #F5F6FE 0%, #FCF0F0 100%)",
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

    "@bp1": {
      minHeight: "calc(100vh - 80px)",
    },

    "@bp2": {
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
      fontFamily: "ABCMonumentGrotesk Bold",
      fontDisplay: "swap",
      src: "url(/fonts/ABCMonumentGrotesk-Black-Trial.woff2) format('woff2'), url(/fonts/ABCMonumentGrotesk-Black-Trial.woff2) format('woff2')",
    },
    {
      fontFamily: "ABCWhyteInktrap Regular",
      fontDisplay: "swap",
      src: "url(/fonts/ABCWhyteInktrap-Regular-Trial.woff2) format('woff2'), url(/fonts/ABCWhyteInktrap-Regular-Trial.woff2) format('woff2')",
    },
  ],
});