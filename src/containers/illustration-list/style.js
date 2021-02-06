const styles = () => ({
  image: {
    width: '100%',
    height: '100%',
  },
  mainImage: {
    margin: 'auto',
    width: '40%',
    '@media (max-width: 800px)': {
      width: '100%',
    },
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    padding: '1.5%',
    '@media (max-width: 800px)': {
      paddingTop: '10%',
      fontSize: '1.3rem',
    },
  },
  description: {
    textAlign: 'center',
    fontSize: '1.2rem',
    '@media (max-width: 800px)': {
      fontSize: '0.8rem',
    },
  },
});

export default styles;
