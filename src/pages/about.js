import React from 'react';

import { Layout, SEO } from 'components';
import { About } from 'containers';
import { injectIntl } from 'gatsby-plugin-intl';

const AboutPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'about' })} />
    <About />
  </Layout>
);

export default injectIntl(AboutPage);
