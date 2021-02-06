const styles = ({ breakpoints, typography }) => ({
  '@global': {
    html: {
      [breakpoints.up('xl')]: {
        fontSize: '0.833333vw !important',
      },
    },
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: `${typography.pxToRem(16)} ${typography.pxToRem(80)}`,
    transition: 'filter .5s, opacity .5s',
    boxSizing: 'border-box',
    '@media (max-width: 800px)': {
      padding: `${typography.pxToRem(32)}`,
      justifyContent: 'flex-start',
    },
  },
  content: {
    width: '100%',
  },
  background: {
    backgroundImage: ``,
    backgroundSize: 'cover',
  },
});

export default styles;
