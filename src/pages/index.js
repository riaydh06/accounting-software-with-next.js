import React from 'react';

import Page from '@containers/Page';

import Head from './_head';
import Home from '@containers/Home/Home';
import { PAGES } from '@constants/pages';

const HomePage = () => (
  <Page>
    <Head id={PAGES.ACCOUNTING} />
    <Home />
  </Page>
);

export default HomePage;
