import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography, Fade, Container } from '@material-ui/core';
import { injectIntl } from 'gatsby-plugin-intl';

import { Animated } from 'components';

import styles from './style';
import useIntro from './useIntro';

type Props = {
  classes: Object,
};

const Welcome = ({ classes, intl }: Props) => {
  const { allContentfulIntro } = useIntro();

  return allContentfulIntro.edges.map(
    ({ node }) =>
      node?.node_locale?.toLowerCase().includes(intl.locale) && (
        <div className={classes.container}>
          <Container className={classes.typographyContainer}>
            <Typography
              variant='h3'
              color='textPrimary'
              className={classes.typography}
              dangerouslySetInnerHTML={{
                __html: node.description.childMarkdownRemark.html,
              }}
            />
            <Fade in timeout={1000}>
              <Typography
                variant='h1'
                color='textPrimary'
                className={classes.typography}>
                <Animated>{node.name}</Animated>
              </Typography>
            </Fade>
          </Container>
          <Container className={classes.image} />
        </div>
      )
  );
};

export default injectIntl(withStyles(styles)(Welcome));
