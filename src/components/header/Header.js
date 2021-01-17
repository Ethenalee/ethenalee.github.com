import { Link } from 'gatsby';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import { injectIntl } from 'gatsby-plugin-intl';

import { Navigation, Language } from 'components';

import styles from './style';

const Header = ({ classes }) => (
  <header className={classes.container}>
    <div>
      <Language />
      <Navigation />
    </div>
  </header>
);

export default withStyles(styles)(injectIntl(Header));
