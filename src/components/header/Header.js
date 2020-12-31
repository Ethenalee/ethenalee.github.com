import { Link } from 'gatsby';
import React from 'react';
import { withStyles } from '@material-ui/styles';

import { Navigation } from 'components';

import styles from './style';

const Header = ({ classes }) => (
  <header className={classes.container}>
    <div>
      <Navigation />
    </div>
  </header>
);

export default withStyles(styles)(Header);
