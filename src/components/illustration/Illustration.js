import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

import styles from './style';

type Props = {
  classes: Object,
  data: Object,
};

const Illustration = ({ classes, data }: Props) => (
  <div className={classes.container}>
    {data.image ? <Img fluid={data.image.fluid} /> : null}
    <Typography variant='h4' color='textPrimary' align='center'>
      {data.description}
    </Typography>
  </div>
);

export default withStyles(styles)(Illustration);
