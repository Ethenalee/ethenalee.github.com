import React from 'react';

import { Layout, SEO } from 'components';
import { IllustrationList } from 'containers';

const IllustrationPage = () => (
  <Layout noBackground>
    <SEO title='Illustration' />
    <IllustrationList />
  </Layout>
);

export default IllustrationPage;
