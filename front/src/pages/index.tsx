import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { Index } from '@/components/pages';
import { withAuth } from '@/utils/withAuth';

export const getServerSideProps = withAuth();

const Component: FC = () => (
  <>
    <Head>
      <title>トップページ</title>
    </Head>

    <Index />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
