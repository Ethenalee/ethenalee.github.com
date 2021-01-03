const styles = ({ palette, typography }) => ({
  container: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    position: 'relative',
    flexWrap: 'wrap',
  },
  linkText: {
    paddingRight: typography.pxToRem(8),
  },
  linkIcon: {
    marginRight: typography.pxToRem(8),
  },
  link: {
    border: 'none',
    display: 'flex',
    textDecoration: 'none',
    color: palette.text.secondary,
  },
});

export default styles;
