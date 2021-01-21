import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { IllustrationList } from 'containers';

const IllustrationPage = ({ intl }) => (
  <Layout noBackground>
    <SEO title={intl.formatMessage({ id: 'illustration' })} />
    <IllustrationList />
  </Layout>
);

export default injectIntl(IllustrationPage);
