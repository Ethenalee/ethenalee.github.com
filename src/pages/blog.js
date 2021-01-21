import React from 'react';

import { Layout, SEO } from 'components';
import { BlogPostList } from 'containers';
import { injectIntl } from 'gatsby-plugin-intl';

const BlogPage = ({ intl }) => (
  <Layout noBackground>
    <SEO title={intl.formatMessage({ id: 'blog' })} />
    <BlogPostList />
  </Layout>
);

export default injectIntl(BlogPage);
