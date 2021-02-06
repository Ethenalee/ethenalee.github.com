const styles = ({ typography }) => ({
  container: {
    padding: `${typography.pxToRem(16)} 0`,
    margin: 'auto',
    minHeight: '70vh',
    minWidth: '100%',
    '@media (max-width: 800px)': {
      width: '80%',
      minHeight: '60vh',
    },
  },
});

export default styles;
