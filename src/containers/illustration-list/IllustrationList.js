import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { injectIntl } from 'gatsby-plugin-intl';

import useIllustrations from './useIllustrations';
import styles from './style';

type Props = {
  classes: Object,
};

const IllustrationList = ({ classes, intl }: Props) => {
  const { allContentfulIllustration } = useIllustrations();
  const filteredImages = allContentfulIllustration.edges.filter(({ node }) =>
    node.node_locale.toLowerCase().includes(intl.locale)
  );
  const settings = {
    customPaging: i => (
      <a href={filteredImages[i].node.image.fixed.src}>
        <img
          className={classes.image}
          key={i}
          src={filteredImages[i].node.image.fixed.src}
          alt={filteredImages[i].node.title}
        />
      </a>
    ),
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {allContentfulIllustration.edges.map(
        ({ node }, index) =>
          node?.node_locale?.toLowerCase().includes(intl.locale) && (
            <div key={index}>
              <img
                className={classes.mainImage}
                src={node.image.fixed.src}
                alt={node.title}
              />
              <Typography className={classes.title}>{node.title}</Typography>
              <Typography className={classes.description}>
                {node.description}
              </Typography>
            </div>
          )
      )}
    </Slider>
  );
};

export default injectIntl(withStyles(styles)(IllustrationList));
