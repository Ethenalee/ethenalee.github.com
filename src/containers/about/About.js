import React from 'react';
import { Typography, Fade } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { Animated, LinkList } from 'components';

import content from './content';
import styles from './style';

const { title, subtitle, links } = content;

type Props = {
  classes: Object,
};

const About = ({ classes }: Props) => (
  <div className={classes.container}>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{title}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>
    <LinkList links={links} />
  </div>
);

export default withStyles(styles)(About);
