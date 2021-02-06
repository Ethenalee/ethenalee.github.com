import React from 'react';
import { Typography, Fade } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

import { Animated, LinkList } from 'components';

import content from './content';
import styles from './style';

const { links } = content;

type Props = {
  classes: Object,
};

const About = ({ classes }: Props) => (
  <div className={classes.container}>
    <Fade in timeout={1000}>
      <Typography className={classes.title}>
        <Animated>
          <FormattedMessage id='aboutTitle' />
        </Animated>
      </Typography>
    </Fade>
    <Typography className={classes.subTitle}>
      <FormattedMessage id='aboutSubTitle' />
    </Typography>
    <LinkList links={links} />
  </div>
);

export default injectIntl(withStyles(styles)(About));
