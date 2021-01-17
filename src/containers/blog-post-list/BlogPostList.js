import React from 'react';
import { withStyles } from '@material-ui/styles';
import { injectIntl } from 'gatsby-plugin-intl';

import { BlogPost } from 'components';

import useBlogPosts from './useBlogPosts';
import styles from './style';

type Props = {
  classes: Object,
};

const BlogPostList = ({ classes, intl }: Props) => {
  const { allContentfulBlogPost } = useBlogPosts();

  return (
    <div className={classes.container}>
      {allContentfulBlogPost.edges.map(
        ({ node }, index) =>
          node?.node_locale?.toLowerCase().includes(intl.locale) && (
            <BlogPost key={index} data={node} />
          )
      )}
    </div>
  );
};

export default injectIntl(withStyles(styles)(BlogPostList));
