import { createStitches } from "@stitches/react";

export const { css, styled, globalCss, getCssText, keyframes, theme } =
  createStitches({
    theme: {
      colors: {
        primary: "#000",
        secondary: "#F9F9F9",
        pink: "#F7EEF9",
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
    fontWeight: 400,
    fontSize: "16px",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "ABCWhyteVariable",
  },

  h1: {
    fontSize: "clamp(2.5rem, 5vw, 5rem)",
    lineHeight: "clamp(2.9rem, 7vw, 5rem)",
  },

  section: {
    padding: "0 20px",

    "@bp2": {
      padding: "0 100px",
    },
  },

  "@font-face": [
    {
      fontFamily: "ABCWhyteVariable",
      fontDisplay: "swap",
      fontWeight: "100 1000",
      fontStretch: "25% 151%",
      src: "url(/fonts/ABCWhyteInktrapVariable-Trial.woff2) format('woff2')",
    },
    {
      fontFamily: "ABCWhyteInktrap Regular",
      fontDisplay: "swap",
      src: "url(/fonts/ABCWhyteInktrap-Regular-Trial.woff2) format('woff2')",
    },
    {
      fontFamily: "ABCMonumentGrotesk Regular",
      fontDisplay: "swap",
      src: "url(/fonts/ABCMonumentGrotesk-Regular-Trial.woff2) format('woff2')",
    },
    {
      fontFamily: "ABCMonumentGrotesk Medium",
      fontDisplay: "swap",
      src: "url(/fonts/ABCMonumentGrotesk-Medium-Trial.woff2) format('woff2')",
    },
  ],
});
