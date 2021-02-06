const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80vh',
    padding: 0,
    alignContent: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: '2rem',
    fontWeight: '500',
    '@media (max-width: 800px)': {
      fontSize: '1rem',
    },
  },
  title: {
    fontSize: '5rem',
    fontWeight: '700',
    '@media (max-width: 800px)': {
      fontSize: '2.5rem',
    },
  },
};

export default styles;
