const styles = ({ typography }) => ({
  container: {
    padding: `${typography.pxToRem(16)} 0`,
    width: '50%',
    margin: 'auto',
    '@media (max-width: 1024px)': {
      width: '80%',
    },
  },
});

export default styles;
