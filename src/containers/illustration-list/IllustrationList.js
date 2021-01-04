import React from 'react';
import { withStyles } from '@material-ui/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useIllustrations from './useIllustrations';
import styles from './style';

type Props = {
  classes: Object,
};

const IllustrationList = ({ classes }: Props) => {
  const { allContentfulIllustration } = useIllustrations();
  const settings = {
    customPaging: i => {
      return (
        <a>
          <img
            className={classes.image}
            key={i}
            src={allContentfulIllustration.edges[i].node.image.fluid.src}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {allContentfulIllustration.edges.map(({ node }, index) => (
        <div key={index}>
          <img src={node.image.fluid.src} />
        </div>
      ))}
    </Slider>
  );
};

export default withStyles(styles)(IllustrationList);
