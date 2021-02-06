import illustration from '../../images/illustration.png';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '80vh',
    padding: 0,
    alignContent: 'center',
    justifyContent: 'space-around',
    '@media (max-width: 800px)': {
      minWidth: 'auto',
      alignContent: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '1rem',
    },
  },
  typographyContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '55%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    '@media (max-width: 800px)': {
      width: '100%',
    },
  },
  typography: {
    paddingBottom: '10%',
    fontSize: '2rem',
    fontWeight: '500',
    '@media (max-width: 800px)': {
      paddingBottom: '2%',
      fontSize: '1rem',
    },
  },
  name: {
    fontSize: '5rem',
    fontWeight: '700',
    '@media (max-width: 800px)': {
      margin: 'auto',
      fontSize: '2.5rem',
    },
  },
  image: {
    backgroundImage: `url(${illustration})`,
    backgroundSize: 'contain',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '30%',
    '@media (max-width: 800px)': {
      width: '100%',
      height: '300px',
    },
    margin: 0,
  },
};

export default styles;
