import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { Contents } from '@/components/pages/admin/contents';

const Component: FC = () => (
  <>
    <Head>
      <title>学習コンテンツ一覧</title>
    </Head>

    <Contents />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
