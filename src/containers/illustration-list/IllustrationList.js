import React from 'react';
import { withStyles } from '@material-ui/styles';

import { Illustration } from 'components';

import useIllustrations from './useIllustrations';
import styles from './style';

type Props = {
  classes: Object,
};

const IllustrationList = ({ classes }: Props) => {
  const { allContentfulIllustration } = useIllustrations();

  return (
    <div className={classes.container}>
      {allContentfulIllustration.edges.map(({ node }, index) => (
        <Illustration key={index} data={node} />
      ))}
    </div>
  );
};

export default withStyles(styles)(IllustrationList);
