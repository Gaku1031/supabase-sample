import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC, Suspense } from 'react';
// import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
// import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { PageSpinner } from '@/components/atoms/PageSpinner';

import { Index } from '@/components/pages';

const Component: FC = () => (
  <>
    <Head>
      <title>トップページ</title>
    </Head>

    <Suspense fallback={<PageSpinner />}>
      <Index />
    </Suspense>
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
