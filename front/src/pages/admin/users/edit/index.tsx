import { NextPage } from 'next';
import Head from 'next/head';
import React, { FC } from 'react';

import { EditUser } from '@/components/pages/admin/users/edit';

const Component: FC = () => (
  <>
    <Head>
      <title>ユーザー更新</title>
    </Head>

    <EditUser />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
