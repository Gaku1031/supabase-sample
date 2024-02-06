import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { CreateUser } from '@/components/pages/admin/users/create';

const Component: FC = () => (
  <>
    <Head>
      <title>ユーザー作成</title>
    </Head>

    <CreateUser />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
