import React, { useState } from 'react';
import * as _ from 'lodash/fp';

import { withStyles } from '@material-ui/styles';
import { injectIntl } from 'gatsby-plugin-intl';

import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

import { BlogPost } from 'components';
import useBlogPosts from './useBlogPosts';
import styles from './style';

type Props = {
  classes: Object,
};

const BlogPostList = ({ classes, intl }: Props) => {
  const { allContentfulBlogPost } = useBlogPosts();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const filteredData = allContentfulBlogPost?.edges?.filter(({ node }) =>
    node.node_locale.toLowerCase().includes(intl.locale)
  );
  const tags = _.uniq(
    filteredData.length > 0 &&
      filteredData?.map(({ node }) => node.tags).flat(1)
  );
  const [selectedtags, setTags] = useState(tags);

  const onClick = tagToAdd => (_event: React.MouseEvent) => {
    !selectedtags.includes(tagToAdd) && setTags([...selectedtags, tagToAdd]);
    selectedtags.includes(tagToAdd) &&
      setTags(selectedtags.filter(tag => tag !== tagToAdd));
    setPage(1);
  };

  const taggedData =
    filteredData.length > 0 &&
    filteredData?.filter(({ node }) =>
      node.tags.some(tag => selectedtags.includes(tag))
    );

  return (
    <div className={classes.container}>
      <div className={classes.blog}>
        <BlogPost
          data={page >= 1 && taggedData.length > 0 && taggedData[page - 1].node}
        />
        <Pagination
          size='small'
          count={taggedData.length}
          page={page}
          onChange={handleChange}
        />
      </div>
      <Card className={classes.card}>
        <Typography className={classes.typography}>Tags</Typography>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            size='small'
            className={classes.tags}
            clickable
            label={tag}
            onClick={onClick(tag)}
            variant={!selectedtags.includes(tag) ? 'outlined' : 'default'}
          />
        ))}
      </Card>
    </div>
  );
};

export default injectIntl(withStyles(styles)(BlogPostList));
