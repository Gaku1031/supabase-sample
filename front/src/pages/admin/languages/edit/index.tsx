import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { EditLanguages } from '@/components/pages/admin/languages/edit';

const Component: FC = () => (
  <>
    <Head>
      <title>学習言語編集</title>
    </Head>

    <EditLanguages />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
