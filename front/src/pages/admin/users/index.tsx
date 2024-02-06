import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { Users } from '@/components/pages/admin/users';

const Component: FC = () => (
  <>
    <Head>
      <title>ユーザー管理</title>
    </Head>

    <Users />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
