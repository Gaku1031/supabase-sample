import React, { FC } from 'react'
import { Users } from './presentation'
import useSWR from 'swr';
import { User } from '@/services/schema/types';
import { supabase } from '@/utils/supabaseClient';
import { useUserInfo } from '@/hooks/useUserInfo';
import { useRouter } from 'next/router';

export const Container: FC = () => {
  const router = useRouter();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: users } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/users`, fetcher, {
    revalidateOnFocus: false,
  })

  const userArray = users?.map((user: User) => {
    return {
      email: user.email,
      is_admin: user.is_admin,
      name: user.name,
      id: user.id
    };
  })

  const { user } = useUserInfo();
  const userId = user?.id;

  const fetchUser = async (): Promise<User[]> => {
    const { data, error } = await supabase.from('users').select();
    if (error) {
      console.error(error);
      return [];
    }
    return data;
  };

  const checkAdmin = async (userId: string) => {
    const data = await fetchUser();
  
    // userIdとdataのidを比較して同じidを持つユーザーのis_adminを検証
    const user = data.find((d: User) => d.id === userId);
    const isAdmin = user ? user.is_admin : false;
  
    return isAdmin;
  };

  if (!userId) {
    return <></>
  }

  checkAdmin(userId).then((isAdmin) => {
    if (!isAdmin) {
      router.push('/error');
    }
  });

  return (
    <Users
      userArray={userArray}
    />
  )
}
