import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Welcome } from 'containers';

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO ttitle={intl.formatMessage({ id: 'title' })} />
    <Welcome />
  </Layout>
);

export default injectIntl(IndexPage);
