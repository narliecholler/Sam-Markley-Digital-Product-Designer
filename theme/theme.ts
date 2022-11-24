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
  },

  main: {
    padding: "0 100px",
  },
});