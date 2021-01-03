import illustration from '../../images/illustration.png';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '80vh',
    minWidth: '80rem',
    padding: 0,
    alignContent: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 1024px)': {
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
    width: '35%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    '@media (max-width: 1024px)': {
      width: '100%',
    },
  },
  typography: {
    paddingBottom: '10%',
    '@media (max-width: 1024px)': {
      paddingBottom: '2%',
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
    width: '45%',
    '@media (max-width: 1024px)': {
      width: '100%',
      height: '450px',
    },
    margin: 0,
  },
};

export default styles;
