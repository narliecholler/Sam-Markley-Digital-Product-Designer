import { createStitches } from '@stitches/react'

export const { css, styled, globalCss, getCssText } = createStitches({
  theme:{
    colors: {
      primary: '#000',
      secondary: '#fff'
    },
    fontSizes: {
      1: '16px',
      2: '18px',
      3: '20px'
    }
  }
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  }
})