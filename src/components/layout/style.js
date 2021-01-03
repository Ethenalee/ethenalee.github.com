const styles = ({ breakpoints, typography }) => ({
  '@global': {
    html: {
      [breakpoints.up('xl')]: {
        fontSize: '0.833333vw !important',
      },
    },
  },
  container: {
    minHeight: '100vh',
  },
  scrollFix: {
    marginRight: '-17px !important',
    marginBottom: '-17px !important',
    width: '100%',
    height: '100%',
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100%',
    padding: `${typography.pxToRem(16)} ${typography.pxToRem(80)}`,
    transition: 'filter .5s, opacity .5s',
    boxSizing: 'border-box',
    '@media (max-width: 1024px)': {
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
