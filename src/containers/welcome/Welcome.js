import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography, Fade, Container } from '@material-ui/core';

import { Animated } from 'components';

import content from './content';
import styles from './style';

const { tagline, title } = content;

type Props = {
  classes: Object,
};

const Welcome = ({ classes }: Props) => (
  <div className={classes.container}>
    <Container className={classes.typographyContainer}>
      <Typography
        variant='h3'
        color='textPrimary'
        className={classes.typography}>
        {tagline}
      </Typography>
      <Fade in timeout={1000}>
        <Typography
          variant='h1'
          color='textPrimary'
          className={classes.typography}>
          <Animated>{title}</Animated>
        </Typography>
      </Fade>
    </Container>
    <Container className={classes.image} />
  </div>
);

export default withStyles(styles)(Welcome);
