import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { CreateContents } from '@/components/pages/admin/contents/create';

const Component: FC = () => (
  <>
    <Head>
      <title>学習コンテンツ追加</title>
    </Head>

    <CreateContents />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
