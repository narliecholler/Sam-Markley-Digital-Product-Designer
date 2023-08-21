import { styled, theme } from 'theme';

export const Wrapper = styled('div', {
  display: 'grid',
  placeItems: 'center',
  gridTemplateAreas: 'main',
  color: theme.colors.white,
});

export const Content = styled('div', {
  gridArea: 'main',
  display: 'grid',
  placeItems: 'center',
  lineHeight: 1.2,
  gridTemplateAreas: 'content',

  '& .content-text': {
    gridArea: 'text',
    textTransform: 'uppercase',
    margin: 0,
    opacity: 0.5,
  },

  '& svg': {
    gridArea: 'img',
    maxWidth: '50%',
    height: 'auto',
    // aspectRatio: '1000/450',
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
      two: {
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
        },

        '& .title-down': {
          justifySelf: 'end',
          alignSelf: 'start',
          marginTop: '-0.1em',
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
  variants: {
    up: {
      true: {
        gridArea: 'title-up',
        justifySelf: 'end',
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
