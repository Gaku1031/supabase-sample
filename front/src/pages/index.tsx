import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';
// import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
// import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { Index } from '@/components/pages';

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
