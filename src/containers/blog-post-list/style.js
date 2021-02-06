const styles = ({ typography }) => ({
  container: {
    padding: `${typography.pxToRem(16)} 0`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    '@media (max-width: 800px)': {
      flexDirection: 'column-reverse',
    },
  },
  blog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '50vw',
  },
  card: {
    width: '20%',
    height: '40%',
    padding: '1%',
    '@media (max-width: 800px)': {
      flexDirection: 'column-reverse',
      width: '100%',
      height: '40%',
      padding: '5%',
    },
  },
  typography: {
    fontSize: '1.5rem',
    fontWeight: '700',
    '@media (max-width: 800px)': {
      fontSize: '1rem',
    },
  },
  tags: {
    fontSize: '1.2rem',
    margin: '1%',
    padding: '1%',
    '@media (max-width: 800px)': {
      fontSize: '0.7rem',
    },
  },
});

export default styles;
