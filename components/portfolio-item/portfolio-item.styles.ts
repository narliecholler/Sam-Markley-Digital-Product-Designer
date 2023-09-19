import { styled, theme } from 'theme';

export const Wrapper = styled('div', {
  display: 'grid',
  placeItems: 'center',
  gridTemplateAreas: `
    'main'
  `,
  marginBottom: '32vh',
  color: theme.colors.white,
  position: 'relative',
});

export const Content = styled('div', {
  gridArea: 'main',
  display: 'grid',
  placeItems: 'center',
  lineHeight: 1.2,
  gridTemplateAreas: `
    'content'
  `,
  position: 'relative',

  '&:first-child': {
    height: '100vh',
  },

  '& .content-text': {
    gridArea: 'text',
    textTransform: 'uppercase',
    margin: 0,
    opacity: 0.5,
  },

  '& svg': {
    gridArea: 'img',
    maxWidth: '100%',
    height: 'auto',
  },

  variants: {
    layout: {
      true: {
        gridTemplateAreas: `
                'title-up title-down' 
                'img img'
                'text text'
            `,
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
      },
    },
    animation: {
      2: {
        gridTemplateAreas: `
            'title-up ...' 
            'img img'
            'text title-down'
        `,
        gridTemplateColumns: 'auto auto',
        justifyContent: 'center',
        rowGap: '3vh',

        '& .title-up': {
          justifySelf: 'start',
          fontFamily: 'Krylon',
          fontSize: 'clamp(2rem, 5vw, 76px)',
        },

        '& .title-down': {
          justifySelf: 'end',
          alignSelf: 'start',
          marginTop: '-0.1em',
          fontSize: 'clamp(1rem, 5vw, 1.5rem)',
        },

        '& .content-text': {
          alignSelf: 'start',
          justifySelf: 'start',
          maxWidth: '400px',
        },
      },
    },
  },
});

export const TitleWrapper = styled('div', {
  display: 'flex',
  gap: '1em',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Title = styled('p', {
  paddingTop: '0.3em',
  lineHeight: 0.525,
  fontSize: '2rem',
  position: 'relative',
  zIndex: 100,
  textIndent: '-0.1em',

  variants: {
    up: {
      true: {
        gridArea: 'title-up',
        justifySelf: 'start',
        alignSelf: 'start',
      },
    },
    down: {
      true: {
        gridArea: 'title-down',
        justifySelf: 'start',
        alignSelf: 'end',
      },
    },
  },
});
