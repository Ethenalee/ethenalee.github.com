import React from 'react';
import { withStyles } from '@material-ui/styles';
import Fade from '@material-ui/core/Fade';
import classNames from 'classnames';

import { Header } from 'components';

import styles from './style';

require('typeface-roboto');

type Props = {
  classes: Object,
  children: HTMLElement,
  noBackground: Boolean,
};

const Layout = ({ classes, children, noBackground }: Props) => (
  <div
    className={classNames(
      classes.pageContainer,
      !noBackground && classes.background
    )}>
    <Header />
    <Fade in mountOnEnter unmountOnExit>
      <main className={classes.content}>{children}</main>
    </Fade>
  </div>
);

export default withStyles(styles)(Layout);
