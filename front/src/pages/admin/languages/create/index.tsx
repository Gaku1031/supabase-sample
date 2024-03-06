import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { CreateLanguage } from '@/components/pages/admin/languages/create';

const Component: FC = () => (
  <>
    <Head>
      <title>学習言語追加</title>
    </Head>

    <CreateLanguage />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
