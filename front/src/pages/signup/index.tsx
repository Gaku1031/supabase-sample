import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { SignUp } from '@/components/pages/signup';

const Component: FC = () => (
  <>
    <Head>
      <title>会員登録</title>
    </Head>

    <SignUp />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
