import React from 'react';

import { Layout, SEO } from 'components';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: '404' })} />
    <h1>
      <FormattedMessage id='404' />
    </h1>
  </Layout>
);

export default injectIntl(NotFoundPage);
