import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { Upload } from '@/components/pages/upload';

const Component: FC = () => (
  <>
    <Head>
      <title>メール送信</title>
    </Head>

    <Upload />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
