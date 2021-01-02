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
  },
  typography: {
    paddingBottom: '10%',
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
    margin: 0,
  },
};

export default styles;
