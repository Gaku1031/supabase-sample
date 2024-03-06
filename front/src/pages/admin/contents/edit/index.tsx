import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { EditContents } from '@/components/pages/admin/contents/edit';

const Component: FC = () => (
  <>
    <Head>
      <title>学習コンテンツ編集</title>
    </Head>

    <EditContents />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
