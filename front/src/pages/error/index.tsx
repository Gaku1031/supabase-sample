import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { Error } from '@/components/pages/error';

const Component: FC = () => (
  <>
    <Head>
      <title>エラーページ</title>
    </Head>

    <Error />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
