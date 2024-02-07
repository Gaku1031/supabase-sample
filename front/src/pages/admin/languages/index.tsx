import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { Languages } from '@/components/pages/admin/languages';

const Component: FC = () => (
  <>
    <Head>
      <title>学習言語一覧</title>
    </Head>

    <Languages />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
