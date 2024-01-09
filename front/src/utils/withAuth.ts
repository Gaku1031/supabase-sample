import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { supabase } from './supabaseClient';
import { useUser } from '@supabase/auth-helpers-react';

export const withAuth = <P extends Record<string, unknown> = Record<string, unknown>>(
  gssp?: GetServerSideProps<P>
) => async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
  const user = await supabase.auth.getSession()

  if (user === null) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // gssp が提供されている場合、その関数を実行
  if (gssp) {
    return await gssp(context);
  }

  // gssp がない場合、単に props を返す
  return {
    props: {} as P,
  };
};
